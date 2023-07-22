import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View,Image,ScrollView,ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import useLoader from '../hooks/useLoader';
import Loading from './Loading';
import { config, recentURL } from '../api/api';
import axios from 'axios';
const RecentMatches = () => {
  const [recentMatches,setRecentMatches] = useState<any[]>([]);
  const {loading,startLoading,closeLoading} = useLoader();

  const fetchRecentMatches = async() =>{
        try {
            const response = await axios.get(recentURL,config);
            setRecentMatches(response.data.typeMatches);
        } catch (error) {
            console.error(error);
        }
    }
  useEffect(()=>{
    startLoading();
    fetchRecentMatches();
    closeLoading();
  },[])
  return (
    <ScrollView>
        {loading?<Loading />: <View>
            {
                recentMatches.map((match,index)=>{
                    return (<View key={`${match.matchType}${index}`}>
                        <Text style={{backgroundColor:'white',padding:10}}>{match.matchType}</Text>
                        <View>
                            {match.seriesMatches.map((seriesMatch:any,index:number)=>{
                                //console.log(seriesMatch?.seriesAdWrapper);
                                if(seriesMatch?.adDetail){
                                    //return <View key={`live-${index}`}><Text>{seriesMatch?.adDetail?.name}</Text></View>
                                }else if(seriesMatch?.seriesAdWrapper){
                                    return  <View key={`live-${index}`}>
                                            <View style={{backgroundColor:'#acdfda',padding:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                            <Text style={{}}>{seriesMatch?.seriesAdWrapper?.seriesName}</Text>
                                            <FontAwesome name="angle-right" size={24} color="black" style={{marginRight:10}} />
                                        </View>
                                        <View>
                                            {seriesMatch?.seriesAdWrapper?.matches.map((matches:any,index:number)=>{
                                                //console.log(matches.matchScore);
                                                return <View key={index} style={{backgroundColor:'white',padding:10,borderBottomColor: '#e3e6e3',
                                                borderBottomWidth: 2,}}>
                                                    <View style={{flexDirection:'row',marginBottom:10}}>
                                                        <Text style={{color:'black'}}>{matches.matchInfo.matchDesc}</Text>
                                                        <Text style={{color:'black'}}> - {matches.matchInfo.venueInfo.city}</Text>
                                                    </View>
                                                    <View style={{flexDirection:"row"}}>
                                                        <Image style = {{ width: 20, height: 20 }}  source={{uri:`https://www.cricbuzz.com/a/img/v1/25x18/i1/c${matches.matchInfo.team1.imageId}/${matches.matchInfo.team1.teamName}.jpg`}} />
                                                        <Text style={{color:'black',marginLeft:10,marginBottom:10}}>{matches.matchInfo.team1.teamName}</Text>
                                                        {!!matches.matchScore?.team1Score && <View style={{flexDirection:'row',marginLeft:50}}>
                                                            <Text style={{color:'black'}}>{matches.matchScore.team1Score.inngs1.runs}-{matches.matchScore.team1Score?.inngs1.wickets}</Text>
                                                            <Text style={{color:'black'}}>({matches.matchScore.team1Score.inngs1.overs})</Text>
                                                        </View>}
                                                    </View>
                                                    <View style={{flexDirection:"row"}}>
                                                        <Image style = {{ width: 20, height: 20 }}  source={{uri:`https://www.cricbuzz.com/a/img/v1/25x18/i1/c${matches.matchInfo.team2.imageId}/${matches.matchInfo.team2.teamName}.jpg`}} />
                                                        <Text style={{color:'black',marginLeft:10,marginBottom:10}}>{matches.matchInfo.team2.teamName}</Text>
                                                        {!!matches.matchScore?.team2Score && <View style={{flexDirection:'row',marginLeft:50}}>
                                                            <Text style={{color:'black'}}>{matches.matchScore.team2Score.inngs1.runs}-{matches.matchScore.team2Score?.inngs1.wickets}</Text>
                                                            <Text style={{color:'black'}}>({matches.matchScore.team2Score.inngs1.overs})</Text>
                                                        </View>}
                                                    </View>
                                                    <Text style={{color:'red'}}>{matches.matchInfo.status}</Text>
                                                </View>
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

export default RecentMatches