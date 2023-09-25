import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Header from '../header/header';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router';

const tiers = [
  {
    title: 'Basic',
    price: '79',
    description: [
      '1 month validity',
      'Unlimited vedio call',
      'Help center access',
      '24/7 chat',
    ],
    amount: 79,
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '129',
    description: [
      '1 month validity',
      'Unlimited vedio call ',
      'Trainer Support',
      '24/7 chat',
    ],
    amount: 129,
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '1399',
    description: [
      '1 year plan',
      'Unlimited vedio call',
      'Trainer Support',
      '24/7 chat',
    ],
    amount: 1399,
    buttonVariant: 'outlined',
  },
];

const defaultTheme = createTheme();

export default function Pricing() {

  const navigate = useNavigate()

  let user = JSON.parse(localStorage.getItem("store"))?.user?.userData;



  React.useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const handleAddMoney = (amount) => {
    
    const options = {
      key: 'rzp_test_GP67UXsS4HOYbR',
      amount: amount * 100, // amount in paisa
      currency: 'INR',
      name: 'TALK EASY',
      description: 'Add Money to Wallet',
      handler: function (response) {
        handlePaymentSuccess(amount)
      },
      prefill: {
        email: user?.email,
      },
      theme: {
        color: '#fff', 
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open()
  };

  const handlePaymentSuccess = (amt) => {
    navigate("/trainerList")
  }
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
<Header/>
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Try Premium
        </Typography>
        
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} onClick={()=>handleAddMoney(tier.amount)}>
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer/>
    </ThemeProvider>
  );
}