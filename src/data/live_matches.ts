export interface Ilive_matches_data {
        matchType: string;
        seriesMatches: {
            seriesAdWrapper: {
                seriesId: number;
                seriesName: string;
                matches: {
                    matchInfo: {
                        matchId: number;
                        seriesId: number;
                        seriesName: string;
                        matchDesc: string;
                        matchFormat: string;
                        startDate: string;
                        endDate: string;
                        state: string;
                        status: string;
                        team1: {
                            teamId: number;
                            teamName: string;
                            teamSName: string;
                            imageId: number;
                        };
                        team2: {
                            teamId: number;
                            teamName: string;
                            teamSName: string;
                            imageId: number;
                        };
                        venueInfo: {
                            id: number;
                            ground: string;
                            city: string;
                            timezone: string;
                            latitude: string;
                            longitude: string;
                        }
                        //... 13 more ...;
                        isFantasyEnabled: boolean;
                    };
                    matchScore: {
                        team1Score: {
                            inngs1: {
                                inningsId: number;
                                runs: number;
                                wickets: number;
                                overs: number;
                            };
                        }
                        team2Score: {
                            inngs1: {
                                inningsId: number;
                                runs: number;
                                wickets: number;
                                overs: number;
                            };
                        };
                };
            };
            adDetail?: {
                name:string;
                layout: string;
                position: number;
            };
        }
    }
};
    
export const live_matches_data = [
        {
          "matchType": "International",
          "seriesMatches": [
            {
              "seriesAdWrapper": {
                "seriesId": 5917,
                "seriesName": "ICC World Test Championship Final 2023",
                "matches": [
                  {
                    "matchInfo": {
                      "matchId": 65805,
                      "seriesId": 5917,
                      "seriesName": "ICC World Test Championship Final 2023",
                      "matchDesc": "Final",
                      "matchFormat": "TEST",
                      "startDate": "1686130200000",
                      "endDate": "1686501000000",
                      "state": "In Progress",
                      "status": "Day 4: 2nd Session - Australia lead by 443 runs",
                      "team1": {
                        "teamId": 4,
                        "teamName": "Australia",
                        "teamSName": "AUS",
                        "imageId": 172117
                      },
                      "team2": {
                        "teamId": 2,
                        "teamName": "India",
                        "teamSName": "IND",
                        "imageId": 172115
                      },
                      "venueInfo": {
                        "id": 12,
                        "ground": "Kennington Oval",
                        "city": "London",
                        "timezone": "+01:00",
                        "latitude": "51.48368",
                        "longitude": "-0.114885"
                      },
                      "currBatTeamId": 4,
                      "seriesStartDt": "1686096000000",
                      "seriesEndDt": "1686700800000",
                      "isTimeAnnounced": true,
                      "stateTitle": "In Progress",
                      "isFantasyEnabled": true
                    },
                    "matchScore": {
                      "team1Score": {
                        "inngs1": {
                          "inningsId": 1,
                          "runs": 469,
                          "wickets": 10,
                          "overs": 121.3
                        },
                        "inngs2": {
                          "inningsId": 3,
                          "runs": 270,
                          "wickets": 7,
                          "overs": 84.1
                        }
                      },
                      "team2Score": {
                        "inngs1": {
                          "inningsId": 2,
                          "runs": 296,
                          "wickets": 10,
                          "overs": 69.4
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              "adDetail": {
                "name": "native_matches",
                "layout": "native_large",
                "position": 1
              }
            },
            {
              "seriesAdWrapper": {
                "seriesId": 6589,
                "seriesName": "Africa Continental Cup 2023",
                "matches": [
                  {
                    "matchInfo": {
                      "matchId": 72886,
                      "seriesId": 6589,
                      "seriesName": "Africa Continental Cup 2023",
                      "matchDesc": "4th Match",
                      "matchFormat": "T20",
                      "startDate": "1686394800000",
                      "endDate": "1686407400000",
                      "state": "In Progress",
                      "status": "Uganda need 101 runs in 60 balls",
                      "team1": {
                        "teamId": 14,
                        "teamName": "Kenya",
                        "teamSName": "KEN",
                        "imageId": 172129
                      },
                      "team2": {
                        "teamId": 44,
                        "teamName": "Uganda",
                        "teamSName": "UGA",
                        "imageId": 172151
                      },
                      "venueInfo": {
                        "id": 97,
                        "ground": "Gymkhana Club Ground",
                        "city": "Nairobi",
                        "timezone": "+03:00",
                        "latitude": "-1.269828",
                        "longitude": "36.827494"
                      },
                      "currBatTeamId": 44,
                      "seriesStartDt": "1686268800000",
                      "seriesEndDt": "1687478400000",
                      "isTimeAnnounced": true,
                      "stateTitle": "In Progress"
                    },
                    "matchScore": {
                      "team1Score": {
                        "inngs1": {
                          "inningsId": 1,
                          "runs": 185,
                          "wickets": 3,
                          "overs": 19.6
                        }
                      },
                      "team2Score": {
                        "inngs1": {
                          "inningsId": 2,
                          "runs": 85,
                          "wickets": 4,
                          "overs": 9.6
                        }
                      }
                    }
                  },
                  {
                    "matchInfo": {
                      "matchId": 72882,
                      "seriesId": 6589,
                      "seriesName": "Africa Continental Cup 2023",
                      "matchDesc": "3rd Match",
                      "matchFormat": "T20",
                      "startDate": "1686378600000",
                      "endDate": "1686391200000",
                      "state": "Complete",
                      "status": "Botswana won by 35 runs",
                      "team1": {
                        "teamId": 529,
                        "teamName": "Botswana",
                        "teamSName": "BW",
                        "imageId": 172579
                      },
                      "team2": {
                        "teamId": 569,
                        "teamName": "Rwanda",
                        "teamSName": "RWA",
                        "imageId": 172621
                      },
                      "venueInfo": {
                        "id": 97,
                        "ground": "Gymkhana Club Ground",
                        "city": "Nairobi",
                        "timezone": "+03:00",
                        "latitude": "-1.269828",
                        "longitude": "36.827494"
                      },
                      "currBatTeamId": 529,
                      "seriesStartDt": "1686268800000",
                      "seriesEndDt": "1687478400000",
                      "isTimeAnnounced": true,
                      "stateTitle": "BW Won"
                    },
                    "matchScore": {
                      "team1Score": {
                        "inngs1": {
                          "inningsId": 1,
                          "runs": 169,
                          "wickets": 2,
                          "overs": 19.6
                        }
                      },
                      "team2Score": {
                        "inngs1": {
                          "inningsId": 2,
                          "runs": 134,
                          "wickets": 10,
                          "overs": 19.6
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              "seriesAdWrapper": {
                "seriesId": 6599,
                "seriesName": "Belgium tour of Germany, 2023",
                "matches": [
                  {
                    "matchInfo": {
                      "matchId": 73075,
                      "seriesId": 6599,
                      "seriesName": "Belgium tour of Germany, 2023",
                      "matchDesc": "2nd T20I",
                      "matchFormat": "T20",
                      "startDate": "1686384000000",
                      "endDate": "1686396600000",
                      "state": "Complete",
                      "status": "Germany won by 5 wkts",
                      "team1": {
                        "teamId": 541,
                        "teamName": "Belgium",
                        "teamSName": "BEL",
                        "imageId": 172592
                      },
                      "team2": {
                        "teamId": 77,
                        "teamName": "Germany",
                        "teamSName": "GER",
                        "imageId": 172171
                      },
                      "venueInfo": {
                        "id": 922,
                        "ground": "Bayer Uerdingen Cricket Ground",
                        "city": "Krefeld",
                        "timezone": "+02:00",
                        "latitude": "51.333332",
                        "longitude": "6.566667"
                      },
                      "currBatTeamId": 77,
                      "seriesStartDt": "1686268800000",
                      "seriesEndDt": "1686614400000",
                      "isTimeAnnounced": true,
                      "stateTitle": "Complete"
                    },
                    "matchScore": {
                      "team1Score": {
                        "inngs1": {
                          "inningsId": 1,
                          "runs": 179,
                          "wickets": 9,
                          "overs": 19.6
                        }
                      },
                      "team2Score": {
                        "inngs1": {
                          "inningsId": 2,
                          "runs": 181,
                          "wickets": 5,
                          "overs": 18.2
                        }
                      }
                    }
                  },
                  {
                    "matchInfo": {
                      "matchId": 73068,
                      "seriesId": 6599,
                      "seriesName": "Belgium tour of Germany, 2023",
                      "matchDesc": "1st T20I",
                      "matchFormat": "T20",
                      "startDate": "1686315600000",
                      "endDate": "1686328200000",
                      "state": "Complete",
                      "status": "Germany won by 6 runs",
                      "team1": {
                        "teamId": 77,
                        "teamName": "Germany",
                        "teamSName": "GER",
                        "imageId": 172171
                      },
                      "team2": {
                        "teamId": 541,
                        "teamName": "Belgium",
                        "teamSName": "BEL",
                        "imageId": 172592
                      },
                      "venueInfo": {
                        "id": 922,
                        "ground": "Bayer Uerdingen Cricket Ground",
                        "city": "Krefeld",
                        "timezone": "+02:00",
                        "latitude": "51.333332",
                        "longitude": "6.566667"
                      },
                      "currBatTeamId": 77,
                      "seriesStartDt": "1686268800000",
                      "seriesEndDt": "1686614400000",
                      "isTimeAnnounced": true,
                      "stateTitle": "GER Won"
                    },
                    "matchScore": {
                      "team1Score": {
                        "inngs1": {
                          "inningsId": 1,
                          "runs": 174,
                          "wickets": 7,
                          "overs": 19.6
                        }
                      },
                      "team2Score": {
                        "inngs1": {
                          "inningsId": 2,
                          "runs": 168,
                          "wickets": 9,
                          "overs": 19.6
                        }
                      }
                    }
                  }
                ]
              }
            }
          ]
        },
        {
          "matchType": "Women",
          "seriesMatches": [
            {
              "seriesAdWrapper": {
                "seriesId": 6592,
                "seriesName": "Kwibuka Womens T20I Tournament 2023",
                "matches": [
                  {
                    "matchInfo": {
                      "matchId": 72963,
                      "seriesId": 6592,
                      "seriesName": "Kwibuka Womens T20I Tournament 2023",
                      "matchDesc": "3rd Match",
                      "matchFormat": "T20",
                      "startDate": "1686395700000",
                      "endDate": "1686408300000",
                      "state": "In Progress",
                      "status": "Uganda Women opt to bat",
                      "team1": {
                        "teamId": 448,
                        "teamName": "Uganda Women",
                        "teamSName": "UGAW",
                        "imageId": 172496
                      },
                      "team2": {
                        "teamId": 488,
                        "teamName": "Botswana Women",
                        "teamSName": "BWAW",
                        "imageId": 172536
                      },
                      "venueInfo": {
                        "id": 821,
                        "ground": "Integrated Polytechnic Regional Centre",
                        "city": "Kigali City",
                        "timezone": "+02:00",
                        "latitude": "-1.950851",
                        "longitude": "30.061507"
                      },
                      "currBatTeamId": 448,
                      "seriesStartDt": "1686355200000",
                      "seriesEndDt": "1687132800000",
                      "isTimeAnnounced": true,
                      "stateTitle": "In Progress"
                    },
                    "matchScore": {
                      "team1Score": {
                        "inngs1": {
                          "inningsId": 1,
                          "runs": 61,
                          "wickets": 3,
                          "overs": 14.6
                        }
                      }
                    }
                  },
                  {
                    "matchInfo": {
                      "matchId": 72970,
                      "seriesId": 6592,
                      "seriesName": "Kwibuka Womens T20I Tournament 2023",
                      "matchDesc": "4th Match",
                      "matchFormat": "T20",
                      "startDate": "1686397500000",
                      "endDate": "1686410100000",
                      "state": "In Progress",
                      "status": "Rwanda Women opt to bat",
                      "team1": {
                        "teamId": 720,
                        "teamName": "Rwanda Women",
                        "teamSName": "RWAW",
                        "imageId": 248448
                      },
                      "team2": {
                        "teamId": 1482,
                        "teamName": "Nigeria Women",
                        "teamSName": "NGAW",
                        "imageId": 273957
                      },
                      "venueInfo": {
                        "id": 818,
                        "ground": "Gahanga International Cricket Stadium",
                        "city": "Kigali City",
                        "timezone": "+02:00",
                        "latitude": "-1.950851",
                        "longitude": "30.061507"
                      },
                      "currBatTeamId": 720,
                      "seriesStartDt": "1686355200000",
                      "seriesEndDt": "1687132800000",
                      "isTimeAnnounced": true,
                      "stateTitle": "In Progress"
                    },
                    "matchScore": {
                      "team1Score": {
                        "inngs1": {
                          "inningsId": 1,
                          "runs": 4,
                          "wickets": 1,
                          "overs": 2.6
                        }
                      }
                    }
                  },
                  {
                    "matchInfo": {
                      "matchId": 72959,
                      "seriesId": 6592,
                      "seriesName": "Kwibuka Womens T20I Tournament 2023",
                      "matchDesc": "2nd Match",
                      "matchFormat": "T20",
                      "startDate": "1686383100000",
                      "endDate": "1686395700000",
                      "state": "Complete",
                      "status": "Rwanda Women won by 20 runs",
                      "team1": {
                        "teamId": 720,
                        "teamName": "Rwanda Women",
                        "teamSName": "RWAW",
                        "imageId": 248448
                      },
                      "team2": {
                        "teamId": 488,
                        "teamName": "Botswana Women",
                        "teamSName": "BWAW",
                        "imageId": 172536
                      },
                      "venueInfo": {
                        "id": 818,
                        "ground": "Gahanga International Cricket Stadium",
                        "city": "Kigali City",
                        "timezone": "+02:00",
                        "latitude": "-1.950851",
                        "longitude": "30.061507"
                      },
                      "currBatTeamId": 720,
                      "seriesStartDt": "1686355200000",
                      "seriesEndDt": "1687132800000",
                      "isTimeAnnounced": true,
                      "stateTitle": "RWAW Won"
                    },
                    "matchScore": {
                      "team1Score": {
                        "inngs1": {
                          "inningsId": 1,
                          "runs": 66,
                          "wickets": 10,
                          "overs": 19.6
                        }
                      },
                      "team2Score": {
                        "inngs1": {
                          "inningsId": 2,
                          "runs": 46,
                          "wickets": 10,
                          "overs": 19.5
                        }
                      }
                    }
                  }
                ]
              }
            }
          ]
        }
      ];



export const live_matches_data_new = [
    {
      "matchType": "International",
      "seriesMatches": [
        {
          "seriesAdWrapper": {
            "seriesId": 4777,
            "seriesName": "The Ashes, 2023",
            "matches": [
              {
                "matchInfo": {
                  "matchId": 53357,
                  "seriesId": 4777,
                  "seriesName": "The Ashes, 2023",
                  "matchDesc": "3rd Test",
                  "matchFormat": "TEST",
                  "startDate": "1688637600000",
                  "endDate": "1689008400000",
                  "state": "In Progress",
                  "status": "Day 4: 2nd Session - England need 49 runs",
                  "team1": {
                    "teamId": 4,
                    "teamName": "Australia",
                    "teamSName": "AUS",
                    "imageId": 172117
                  },
                  "team2": {
                    "teamId": 9,
                    "teamName": "England",
                    "teamSName": "ENG",
                    "imageId": 172123
                  },
                  "venueInfo": {
                    "id": 66,
                    "ground": "Headingley",
                    "city": "Leeds",
                    "timezone": "+01:00",
                    "latitude": "53.817622",
                    "longitude": "-1.58211"
                  },
                  "currBatTeamId": 9,
                  "seriesStartDt": "1686873600000",
                  "seriesEndDt": "1690934400000",
                  "isTimeAnnounced": true,
                  "stateTitle": "In Progress",
                  "isFantasyEnabled": true
                },
                "matchScore": {
                  "team1Score": {
                    "inngs1": {
                      "inningsId": 1,
                      "runs": 263,
                      "wickets": 10,
                      "overs": 60.4
                    },
                    "inngs2": {
                      "inningsId": 3,
                      "runs": 224,
                      "wickets": 10,
                      "overs": 67.1
                    }
                  },
                  "team2Score": {
                    "inngs1": {
                      "inningsId": 2,
                      "runs": 237,
                      "wickets": 10,
                      "overs": 52.3
                    },
                    "inngs2": {
                      "inningsId": 4,
                      "runs": 202,
                      "wickets": 6,
                      "overs": 41.5
                    }
                  }
                }
              }
            ]
          }
        },
        {
          "adDetail": {
            "name": "native_matches",
            "layout": "native_large",
            "position": 1
          }
        },
        {
          "seriesAdWrapper": {
            "seriesId": 6437,
            "seriesName": "ICC Cricket World Cup Qualifiers 2023",
            "matches": [
              {
                "matchInfo": {
                  "matchId": 71824,
                  "seriesId": 6437,
                  "seriesName": "ICC Cricket World Cup Qualifiers 2023",
                  "matchDesc": "Final",
                  "matchFormat": "ODI",
                  "startDate": "1688886000000",
                  "endDate": "1688914800000",
                  "state": "Complete",
                  "status": "Sri Lanka won by 128 runs",
                  "team1": {
                    "teamId": 5,
                    "teamName": "Sri Lanka",
                    "teamSName": "SL",
                    "imageId": 172119
                  },
                  "team2": {
                    "teamId": 24,
                    "teamName": "Netherlands",
                    "teamSName": "NED",
                    "imageId": 172138
                  },
                  "venueInfo": {
                    "id": 69,
                    "ground": "Harare Sports Club",
                    "city": "Harare",
                    "timezone": "+02:00",
                    "latitude": "-17.814114",
                    "longitude": "31.050962"
                  },
                  "currBatTeamId": 5,
                  "seriesStartDt": "1687046400000",
                  "seriesEndDt": "1689033600000",
                  "isTimeAnnounced": true,
                  "stateTitle": "SL Won",
                  "isFantasyEnabled": true
                },
                "matchScore": {
                  "team1Score": {
                    "inngs1": {
                      "inningsId": 1,
                      "runs": 233,
                      "wickets": 10,
                      "overs": 47.5
                    }
                  },
                  "team2Score": {
                    "inngs1": {
                      "inningsId": 2,
                      "runs": 105,
                      "wickets": 10,
                      "overs": 23.3
                    }
                  }
                }
              }
            ]
          }
        }
      ]
    },
    {
      "matchType": "Domestic",
      "seriesMatches": [
        {
          "seriesAdWrapper": {
            "seriesId": 6746,
            "seriesName": "Uganda tour of Namibia, 2023",
            "matches": [
              {
                "matchInfo": {
                  "matchId": 76032,
                  "seriesId": 6746,
                  "seriesName": "Uganda tour of Namibia, 2023",
                  "matchDesc": "4th unofficial T20",
                  "matchFormat": "T20",
                  "startDate": "1688904000000",
                  "endDate": "1688916600000",
                  "state": "Innings Break",
                  "status": "Innings Break",
                  "team1": {
                    "teamId": 161,
                    "teamName": "Namibia",
                    "teamSName": "NAM",
                    "imageId": 172229
                  },
                  "team2": {
                    "teamId": 44,
                    "teamName": "Uganda",
                    "teamSName": "UGA",
                    "imageId": 172151
                  },
                  "venueInfo": {
                    "id": 524,
                    "ground": "United Cricket Club Ground",
                    "city": "Windhoek",
                    "timezone": "+02:00",
                    "latitude": "-22.607692",
                    "longitude": "17.096075"
                  },
                  "currBatTeamId": 161,
                  "seriesStartDt": "1688515200000",
                  "seriesEndDt": "1689379200000",
                  "isTimeAnnounced": true,
                  "stateTitle": "Ings Break"
                },
                "matchScore": {
                  "team1Score": {
                    "inngs1": {
                      "inningsId": 1,
                      "runs": 186,
                      "wickets": 7,
                      "overs": 19.6
                    }
                  }
                }
              }
            ]
          }
        }
      ]
    },
    {
      "matchType": "Women",
      "seriesMatches": [
        {
          "seriesAdWrapper": {
            "seriesId": 6634,
            "seriesName": "India Women tour of Bangladesh, 2023",
            "matches": [
              {
                "matchInfo": {
                  "matchId": 73397,
                  "seriesId": 6634,
                  "seriesName": "India Women tour of Bangladesh, 2023",
                  "matchDesc": "1st T20I",
                  "matchFormat": "T20",
                  "startDate": "1688889600000",
                  "endDate": "1688902200000",
                  "state": "Complete",
                  "status": "India Women won by 7 wkts",
                  "team1": {
                    "teamId": 329,
                    "teamName": "Bangladesh Women",
                    "teamSName": "BANW",
                    "imageId": 172377
                  },
                  "team2": {
                    "teamId": 97,
                    "teamName": "India Women",
                    "teamSName": "INDW",
                    "imageId": 172189
                  },
                  "venueInfo": {
                    "id": 128,
                    "ground": "Shere Bangla National Stadium",
                    "city": "Dhaka",
                    "timezone": "+06:00",
                    "latitude": "23.806966",
                    "longitude": "90.363576"
                  },
                  "currBatTeamId": 97,
                  "seriesStartDt": "1688860800000",
                  "seriesEndDt": "1690156800000",
                  "isTimeAnnounced": true,
                  "stateTitle": "INDW Won"
                },
                "matchScore": {
                  "team1Score": {
                    "inngs1": {
                      "inningsId": 1,
                      "runs": 114,
                      "wickets": 5,
                      "overs": 19.6
                    }
                  },
                  "team2Score": {
                    "inngs1": {
                      "inningsId": 2,
                      "runs": 118,
                      "wickets": 3,
                      "overs": 16.2
                    }
                  }
                }
              }
            ]
          }
        }
      ]
    }
  ]