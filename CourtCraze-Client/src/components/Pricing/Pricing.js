



import React, { useState, useEffect } from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars, GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

const Pricing = () => {
  const [userEmail, setUserEmail] = useState('hasanhawk@hotmail.com');
  const [userType, setUserType] = useState('');
  const [btnNames, setBtnNames] = useState({
    Basic: 'Subscribe',
    Gold: 'Subscribe',
    Premium: 'Subscribe'
  });
  const accToken= localStorage.getItem('accessToken');

  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3001/users');
  //       const usersData = await response.json();
  //       const email = localStorage.getItem('email');
        
  //       setUserEmail(email);
  //       setUsers(usersData);
  //       const user = usersData.find(user => user.email === userEmail);
  //       if (user) {
  //         setUserType(user.type);
  //         setBtnNames(prevBtnNames => ({
  //           Basic: user.type === 'Basic' ? 'Unsubscribe' : 'Subscribe',
  //           Gold: user.type === 'Gold' ? 'Unsubscribe' : 'Subscribe',
  //           Premium: user.type === 'Premium' ? 'Unsubscribe' : 'Subscribe'
  //         }));
  //       }
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //     }
  //   };
  //   fetchUsers();
  // }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/users');
        const usersData = await response.json();
        const email = localStorage.getItem('email');
        setUserEmail(email);
        setUsers(usersData);
        
        const user = usersData.find(user => user.email === email);
        if (user ) {
          setUserType(user.type);
          setBtnNames(prevBtnNames => ({
            Basic: user.type === 'Basic' ? 'Unsubscribe' : 'Subscribe',
            Gold: user.type === 'Gold' ? 'Unsubscribe' : 'Subscribe',
            Premium: user.type === 'Premium' ? 'Unsubscribe' : 'Subscribe'
          }));
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleSubscribe = async (type) => {
    if(accToken){
      try {
        const response = await fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: userEmail, type })
        });
        if (response.ok) {
          const usersData = await response.json();
          setUsers(usersData);
          setBtnNames(prevBtnNames => ({
            Basic: type === 'Basic' ? 'Unsubscribe' : 'Subscribe',
            Gold: type === 'Gold' ? 'Unsubscribe' : 'Subscribe',
            Premium: type === 'Premium' ? 'Unsubscribe' : 'Subscribe'
          }));
          setUserType(type);
          localStorage.setItem("subType", type);
          alert('Subscribed to ' + type);
        } else {
          throw new Error('Failed to subscribe');
        }
      } catch (error) {
        console.error('Error subscribing:', error);
      }
    }

    else{
      window.location.href='http://localhost:3000/sign-up';
    }
    
  };
  
  const handleUnsubscribe = async (type) => {
    try {
      const response = await fetch(`http://localhost:3001/users/${userEmail}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        const usersData = await response.json();
        setUsers(usersData);
        setBtnNames(prevBtnNames => ({
          ...prevBtnNames,
          [type]: 'Subscribe'
        }));
        setUserType('');
        localStorage.setItem("subType", "");
        alert('Unsubscribed from ' + type);
      } else {
        throw new Error('Failed to unsubscribe');
      }
    } catch (error) {
      console.error('Error unsubscribing:', error);
    }
  };

  const getColor = (planType) => {
    if (userType === planType) {
      return "#00cc00"; // Green color for subscribed plan
    }
    return "#FF5F1F"; // Default color
  };

  return (
    <IconContext.Provider value={{ color: '#FF5F1F', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan style={{ color: "#ffffff" }}>Basic</PricingCardPlan>
                <PricingCardCost style={{ color: "#ffffff" }}>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>One Live Game</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary style={{ background: getColor('Basic') }} onClick={() => userType === 'Basic' ? handleUnsubscribe('Basic') : handleSubscribe('Basic')}>{btnNames.Basic}</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan style={{ color: "#ffffff" }}>Gold</PricingCardPlan>
                <PricingCardCost style={{ color: "#ffffff" }}>$299.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Two Live Games</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary style={{ background: getColor('Gold') }} onClick={() => userType === 'Gold' ? handleUnsubscribe('Gold') : handleSubscribe('Gold')}>{btnNames.Gold}</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan style={{ color: "#ffffff" }}>Premium</PricingCardPlan>
                <PricingCardCost style={{ color: "#ffffff" }}>$999.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>All Live NBA Games</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary style={{ background: getColor('Premium') }} onClick={() => userType === 'Premium' ? handleUnsubscribe('Premium') : handleSubscribe('Premium')}>{btnNames.Premium}</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing;
