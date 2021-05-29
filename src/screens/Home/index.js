import { Button, Divider, Layout } from '@ui-kitten/components';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import HomeTopBar from './HomeTopBar';

const Home = () => {
  const navigation = useNavigation();

  return (
    <>      
        <HomeTopBar/>    
        <Divider/>
        <Layout style={{ flex: 1, justifyContent: 'center', height:"100%", alignItems: 'center',  }}>
            <Button onPress={()=>navigation.navigate('Home')}> Go to Home</Button>
        </Layout>
    </>
  );
};

export default Home;
//backgroundColor:"#edf1f7"