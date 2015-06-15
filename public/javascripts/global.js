// put here utility functions for screen display?

// don't use a global in the long run 
var candidateListData = [];

// DOM Ready =================================
$(document).ready(function(){

    // Populate the user table on initial page load
    populateCandidates();

});

// Functions ==================================

// Fill screen with data
function populateCandidates(){
    //TODO: fill in logic for what displays where
    
    $.getJSON('/candidates/candidates', function(data){
        $.each(data, function(){
            //candidateListData = data;
            showCandidateInfo(data);
        });
    });
};

// Show candidate info
function showCandidateInfo(data){

    // populateCandidate
    for (var i=0; i<2; i++)
    {
        var thisCandidate = data[i];
        var displayName = thisCandidate.bioInfo.firstName + ' ' + thisCandidate.bioInfo.lastName;
        console.log(displayName);
        var nametag = '#bioInfoName' + i;
        var partytag = '#bioInfoParty' + i;
        $(nametag).text(displayName);
        $(partytag).text(thisCandidate.bioInfo.party);
    }

};
