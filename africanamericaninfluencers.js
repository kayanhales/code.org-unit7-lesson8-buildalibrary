//declare variables
var name = getColumn("TheRoot: 100 Influential African Americans", "Name");
var rank = getColumn("TheRoot: 100 Influential African Americans", "Rank");
var profession = getColumn("TheRoot: 100 Influential African Americans", "Profession");
var followers = getColumn("TheRoot: 100 Influential African Americans", "Twitter Followers");
var sector = getColumn("TheRoot: 100 Influential African Americans", "Sector");

//Gets the rank of a specified influencer
//If the celebName matches a name in the name list, 
//return the celeb rank
function getRank(celebName){
  for (var i=0; i < name.length; i++){
    if (celebName == name[i]){
      return rank[i];
    }
  }
}

console.log("Get Stacey Abrams rank (1):" +getRank("Stacey Abrams"));
console.log("Get Beyoncé rank (18):" +getRank("Beyoncé"));
console.log("Get Allyson Felix rank (26):" +getRank("Allyson Felix"));

//Gets the profession of a specified influencer
//If the celebName matches a name in the name list, 
//return the celeb profession
function getProfession(celebName){
  for (var i=0; i < name.length; i++){
    if (celebName == name[i]){
      return profession[i];
    }
  }
}

console.log("\nGet Stacey Abrams profession (Politician):" +getProfession("Stacey Abrams"));
console.log("Get Beyoncé profession (Entertainer, Entrepreneur):" +getProfession("Beyoncé"));
console.log("Get Allyson Felix profession (Track Champion):" +getProfession("Allyson Felix"));

//Gets the followers of a specified influencer
//If the celebName matches a name in the name list, 
//return the celeb followers
function getFollowers(celebName){
  for (var i=0; i < name.length; i++){
    if (celebName == name[i]){
      return followers[i];
    }
  }
}

console.log("\nGet Stacey Abrams followers (548861):" +getFollowers("Stacey Abrams"));
console.log("Get Beyoncé followers (15360340):" +getFollowers("Beyoncé"));
console.log("Get Allyson Felix followers (745781):" +getFollowers("Allyson Felix"));

//Gets the sector of a specified influencer
//If the celebName matches a name in the name list, 
//return the celeb followers
function getSector(celebName){
  for (var i=0; i < name.length; i++){
    if (celebName == name[i]){
      return sector[i];
    }
  }
}

console.log("\nGet Stacey Abrams sector (Politics):" +getSector("Stacey Abrams"));
console.log("Get Beyoncé sector (Entertainment):" +getSector("Beyoncé"));
console.log("Get Allyson Felix sector (Sports):" +getSector("Allyson Felix"));

//Compare the rank of two celebs
//Return the influencer with more rank
function compareRank(celeb1, celeb2){
  if(getRank(celeb1) < getRank(celeb2)){
    return celeb1;
  } else {
    return celeb2;
  }
}

console.log("\nCompare rank of Stacey and Beyonce (Stacey):" +compareRank("Stacey Abrams", "Beyoncé"));
console.log("Compare rank of Beyonce and Allyson (Beyonce):" +compareRank("Allyson Felix", "Beyoncé"));
console.log("Compare rank of Stacey and Allyson (Stacey):" +compareRank("Stacey Abrams", "Allyson Felix"));

//Compare the followers of two celebs
//Return the influencer with more followers
function compareFollowers(celeb1, celeb2){
  if(getFollowers(celeb1) > getFollowers(celeb2)){
    return celeb1;
  } else {
    return celeb2;
  }
}

console.log("\nCompare followers of Stacey and Beyonce (Beyonce):" +compareFollowers("Stacey Abrams", "Beyoncé"));
console.log("Compare followers of Beyonce and Allyson (Beyonce):" +compareFollowers("Allyson Felix", "Beyoncé"));
console.log("Compare followers of Stacey and Allyson (Allyson):" +compareFollowers("Stacey Abrams", "Allyson Felix"));

//Returns list of influencers in a named sector
function getListOfCelebsInSector(celebSector){
  var celebList = [];
  for(var i=0; i<name.length; i++){
    if(getSector(name[i])==celebSector){
      appendItem(celebList, name[i]);
    }
  }
  return celebList;
}

console.log("\nGet list of influencers in the Entertainment Sector: "+getListOfCelebsInSector("Entertainment"));
console.log("Get list of influencers in the Sports Sector: "+getListOfCelebsInSector("Sports"));
console.log("Get list of influencers in the Politics Sector: "+getListOfCelebsInSector("Politics"));

//Returns the number of influencers in a named sector
function getNumOfCelebsInSector(celebSector){
  var celebCount = 0;
  for(var i=0; i<name.length; i++){
    if(getSector(name[i])==celebSector){
      celebCount++;
    }
  }
  return celebCount;
}

console.log("\nGet number of influencers in the Entertainment Sector: "+getNumOfCelebsInSector("Entertainment"));
console.log("Get number of influencers in the Sports Sector: "+getNumOfCelebsInSector("Sports"));
console.log("Get number of influencers in the Politics Sector: "+getNumOfCelebsInSector("Politics"));

//Return the highest ranking celeb in a sector
function getHighestRankerInSector(celebSector){
  //get all celebs in sector
  var celebList = getListOfCelebsInSector(celebSector);
  //set first person in list to be the highest ranker
  var highestRanker = celebList[0];
  //compare first person to others in list, and if the rank is higher, change who the highest ranker is
  for (var i=0; i<celebList; i++){
    if(getRank(highestRanker) > getRank(celebList[i])){
      highestRanker = celebList[i];
    }
  }
  return highestRanker;
}

console.log("\nGet highest ranker in entertainment sector (Nipsey): "+getHighestRankerInSector("Entertainment"));
console.log("Get highest ranker in sports sector (Alysia Montaño): "+getHighestRankerInSector("Sports"));
console.log("Get highest ranker in politics sector (Stacey Abrams): "+getHighestRankerInSector("Politics"));

//Get influencers whose name starts with a specified letter
function getCelebWhoseNameStartsWith(letter){
  var celebList = [];
  for (var i=0; i<name.length; i++){
    if(name[i].substring(0,1)==letter){
      appendItem(celebList, name[i]);
    }
  }
  return celebList;
}

console.log("\nGet all influencers whose name starts with 'B': "+getCelebWhoseNameStartsWith("B"));
console.log("Get all influencers whose name starts with 'S': "+getCelebWhoseNameStartsWith("S"));
console.log("Get all influencers whose name starts with 'N': "+getCelebWhoseNameStartsWith("N"));
