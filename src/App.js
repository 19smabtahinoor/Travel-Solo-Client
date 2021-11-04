import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './admin/Dashboard';
import Navbar from './components/Navbar/Navbar';
import AuthProvider from './contexts/AuthProvider';
import BookingProvider from './contexts/BookingProvider';
import useLoading from './hooks/useLoading';
import PrivateRoute from './routes/PrivateRoute';
import BookingScreen from './screens/BookingScreen';
import HomeScreen from './screens/HomeScreen';
import MyBookingScreen from './screens/MyBookingScreen';
import RegisterScreen from './screens/RegisterScreen';

const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = useLoading();

  //loading
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <BrowserRouter>
      <AuthProvider>
        <BookingProvider>
          {loading ? (
            spinner
          ) : (
              <Switch>
                <Route exact path="/">
                  <Navbar bg="bg-transparent" textColor="text-white" width="max-w-screen-xl" />
                  <HomeScreen />
                </Route>
                <Route exact path="/register">
                  <Navbar bg="bg-transparent" textColor="text-white" width="max-w-screen-xl" />
                  <RegisterScreen />
                </Route>
                <PrivateRoute exact path="/dashboard">
                  <Navbar bg="bg-white" textColor="text-gray-700" width="max-w-screen-2xl" />
                  <Dashboard />
                </PrivateRoute>
                <PrivateRoute exact path="/booking/:id">
                  <Navbar bg="bg-white" textColor="text-gray-700" width="max-w-screen-xl" />
                  <BookingScreen />
                </PrivateRoute>
                <PrivateRoute exact path="/my-bookings">
                  <Navbar bg="bg-white" textColor="text-gray-700" width="max-w-screen-xl" />
                  <MyBookingScreen />
                </PrivateRoute>
              </Switch>
          )}
        </BookingProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
