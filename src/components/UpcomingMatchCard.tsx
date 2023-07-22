import React from "react";
import { StyleSheet,Text,View,Image } from "react-native";
const UpcomingMatchCard = ({matches}:any) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row",marginBottom:10 }}>
        <Text style={{ color: "black" }}>{matches.matchInfo.matchDesc}</Text>
        <Text style={{ color: "black" }}>
          {" "}
          - {matches.matchInfo.venueInfo.city}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: 20, height: 20 }}
          source={{
            uri: `https://www.cricbuzz.com/a/img/v1/25x18/i1/c${matches.matchInfo.team1.imageId}/${matches.matchInfo.team1.teamName}.jpg`,
          }}
        />
        <Text style={{ color: "black",marginLeft:10,marginBottom:10 }}>
          {matches.matchInfo.team1.teamName}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: 20, height: 20 }}
          source={{
            uri: `https://www.cricbuzz.com/a/img/v1/25x18/i1/c${matches.matchInfo.team2.imageId}/${matches.matchInfo.team2.teamName}.jpg`,
          }}
        />
        <Text style={{ color: "black",marginLeft:10,marginBottom:10 }}>
          {matches.matchInfo.team2.teamName}
        </Text>
      </View>
      <Text style={{color:'brown'}}>{new Date(parseInt(matches.matchInfo.seriesStartDt)).toString().slice(0,15)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
      //justifyContent: 'center',
      //margin:10,
      padding:10,
      borderBottomColor: '#e3e6e3',
      borderBottomWidth: 2,
    },
  });


export default UpcomingMatchCard;
