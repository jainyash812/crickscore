import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';
import { Ilive_matches_data, live_matches_data } from '../data/live_matches';
import { upcoming_matches_data } from '../data/upcoming_matches';
import UpcomingMatchCard from './UpcomingMatchCard';
import { FontAwesome } from '@expo/vector-icons';
import { config, upcomingURL } from '../api/api';
import axios from 'axios';
import useLoader from '../hooks/useLoader';
import Loading from './Loading';
const UpcomingMatches = ({matches}:any) => {
 const [upcomingMatches,setUpcomingMatches] = useState<any[]>([]);

const fetchUpcomingMatches = async() =>{
    try {
        const response = await axios.get(upcomingURL,config);
        setUpcomingMatches(response.data.typeMatches);
    } catch (error) {
        console.error(error);
    }
}

const {loading,startLoading,closeLoading} = useLoader();

  useEffect(()=>{
    startLoading();
    fetchUpcomingMatches();
    closeLoading();
  },[])
  return (
    <ScrollView>
       {loading?<Loading />:  <View>
            {
                upcomingMatches.map((match:any,index:number)=>{
                    return (<View key={index}>
                        <Text style={{backgroundColor:'white',padding:10}}>{match.matchType}</Text>
                        <View>
                            {match.seriesMatches.map((seriesMatch:any,index:number)=>{
                                //console.log(seriesMatch?.seriesAdWrapper);
                                if(seriesMatch?.adDetail){
                                    return null;
                                    //return <View key={`upcoming-${index}`}><Text>{seriesMatch?.adDetail?.name}</Text></View>
                                }else if(seriesMatch?.seriesAdWrapper){
                                    return  <View  key={`upcoming-${index}`}>
                                        <View style={{backgroundColor:'#acdfda',padding:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                            <Text style={{}}>{seriesMatch?.seriesAdWrapper?.seriesName}</Text>
                                            <FontAwesome name="angle-right" size={24} color="black" style={{marginRight:10}} />
                                        </View>
                                        <View>
                                            {seriesMatch?.seriesAdWrapper?.matches.map((matches:any,index:number)=>{
                                                //console.log(matches);
                                                return <UpcomingMatchCard key={`ui-${index+1}`} matches={matches} />
                                            })}
                                        </View>
                                    </View>
                                }
                            })}
                        </View>
                    </View>);
                }) 
            }
        </View>}
    </ScrollView>
  )
}

export default UpcomingMatches