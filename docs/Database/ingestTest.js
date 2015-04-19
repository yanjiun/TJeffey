// This script ingests some test data for our db usage
// think about how to enforce uniqueness for candidates such that we never
// create duplicate records

var candidate1 = {
    bioInfo: {
        firstName: "Carolyn",
        middleName: "Jane",
        lastName: "Maloney",
        party: "Democrat",
    },
    congressInfo : {
        term: 6,
        chamber: "House",
        district: 12,
        state: "NY",
    },
    electionInfo : {
        chamber: "House",
        state: "NY",
        district: 12,
        year: 2014,
        party: "Democratic",
    },
};

var candidate2 = {
    bioInfo: {
        firstName: "Nick",
        middleName: "",
        lastName: "Di Iorio",
        party: "Republican",
    },
    electionInfo : {
        chamber: "House",
        state: "NY",
        district: 12,
        year: 2014,
        party: "Republican",
    },
};

db.candidates.insert(candidate1);
db.candidates.insert(candidate2);
 
