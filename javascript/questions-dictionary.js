let questionsRegular = {
    "Born in Virginia": ["washington", "jefferson", "madison", "monroe", "harrison_wh", "tyler", "taylor", "wilson"],
    "Born in Ohio": ["grant", "hayes", "garfield", "harrison_b", "mckinley", "taft", "harding"],
    "Born in Massachusetts": ["adams_j", "adams_jq", "kennedy", "bush_ghw"],
    "Born in New York": ["roosevelt_t", "roosevelt_fd", "vanburen", "trump", "fillmore"],
    "Born in Pennsylvania": ["buchanan", "biden"],
    "Born in Texas": ["eisenhower", "johnson_lb"],
    "Born in Vermont": ["arthur", "coolidge"],
    "Born as a British citizen": ["washington", "adams_j", "jefferson", "madison", "monroe", "jackson", "adams_jq", "harrison_wh"],
    "Issued no vetoes as president": ["adams_j", "jefferson", "adams_jq", "harrison_wh", "taylor", "fillmore", "garfield"],
    "Issued more than 50 or more vetoes as president": ["roosevelt_fd", "cleveland", "truman", "eisenhower", "grant", "roosevelt_t", "reagan", "ford", "coolidge"],
    "Never elected to public office before becoming president": ["taylor", "grant", "hoover", "eisenhower", "trump"],
    "Served as U.S. vice president": ["adams_j", "jefferson", "vanburen", "tyler", "fillmore", "johnson_a", "arthur", "roosevelt_t", "coolidge", "truman", "nixon", "johnson_lb", "ford", "bush_ghw", "biden"],
    "Served as U.S. secretary of state": ["jefferson", "madison", "monroe", "adams_jq", "vanburen", "buchanan"],
    "Served as a U.S. senator": ["tyler", "monroe", "johnson_lb", "johnson_a", "jackson", "buchanan", "harding", "harrison_wh", "vanburen", "pierce", "truman", "kennedy", "adams_jq", "obama", "harrison_b", "biden", "nixon"],
    "Served as a member of the U.S. House of Representatives": ["tyler", "madison", "bush_ghw", "johnson_lb", "johnson_a", "polk", "jackson", "buchanan", "mckinley", "garfield", "hayes", "harrison_wh", "fillmore", "pierce", "ford", "kennedy", "adams_jq", "lincoln", "nixon"],
    "Served as a governor of a U.S. state (not territory)": ["tyler", "monroe", "jefferson", "bush_gw", "johnson_a", "polk", "mckinley", "hayes", "roosevelt_fd", "roosevelt_t", "cleveland", "vanburen", "wilson", "coolidge", "carter", "reagan", "clinton"],
    "Served as a member of a colonial legislature under the Kingdom of Great Britain": ["washington", "adams_j", "jefferson"],
    "Served as a U.S. ambassador": ["adams_j", "jefferson", "monroe", "adams_jq", "vanburen", "harrison_wh", "buchanan", "bush_ghw"],
    "Served as a U.S. Secretary of War (or Acting Secretary of War)": ["monroe", "grant", "taft"],
    "Died while president": ["harrison_wh", "taylor", "lincoln", "garfield", "mckinley", "harding", "roosevelt_fd", "kennedy"],
    "President before the age of 50": ["roosevelt_t", "kennedy", "clinton", "grant", "obama", "cleveland", "pierce", "garfield", "polk"],
    "Presidency included time over the age of 70": ["biden", "reagan", "trump", "eisenhower"],
    "Alive past the age of 90": ["hoover", "adams_j", "reagan", "ford", "bush_ghw", "carter"],
    "Did not graduate with a college degree": ["washington", "monroe", "jackson", "vanburen", "harrison_wh", "taylor", "fillmore", "lincoln", "johnson_a", "cleveland", "mckinley", "truman"],
    "Undergraduate and/or graduate degree from Harvard University": ["adams_j", "adams_jq", "roosevelt_t", "roosevelt_fd", "kennedy", "bush_gw", "hayes", "obama"],
    "Undergraduate and/or graduate degree from Yale University": ["taft", "bush_ghw", "bush_gw", "ford", "clinton"],
    "Served two or more full terms as president": ["roosevelt_fd", "jefferson", "madison", "monroe", "jackson", "grant", "cleveland", "wilson", "eisenhower", "reagan", "clinton", "bush_gw", "obama", "washington"],
    "Served exactly one full term as president (no more, no less)": ["adams_j", "adams_jq", "vanburen", "polk", "pierce", "buchanan", "hayes", "harrison_b", "taft", "hoover", "carter", "bush_ghw", "trump"],
    "Served less than one complete term as president": ["harrison_wh", "garfield", "taylor", "harding", "ford", "fillmore", "kennedy", "biden", "arthur", "johnson_a", "tyler"],
    "Impeached by the U.S. House of Representatives": ["johnson_a", "clinton", "trump"],
    "Issued more than 500 executive orders": ["roosevelt_fd", "wilson", "coolidge", "roosevelt_t", "hoover", "truman", "taft", "harding"],
    "Appointed five or more justices to the U.S. Supreme Court": ["washington", "roosevelt_fd", "taft", "jackson", "lincoln", "eisenhower"],
    "Did not appoint any justices to the U.S. Supreme Court": ["harrison_wh", "taylor", "johnson_a", "carter"],
    "Had multiple different vice presidents": ["jefferson", "madison", "jackson", "lincoln", "grant", "cleveland", "mckinley", "roosevelt_fd", "nixon"],
    "Was known to be a member of the Freemasons": ["washington", "monroe", "jackson", "polk", "buchanan", "johnson_a", "garfield", "mckinley", "roosevelt_t", "taft", "harding", "roosevelt_fd", "truman", "ford"],
    "Won a presidential election while losing the popular vote": ["adams_jq", "hayes", "harrison_b", "bush_gw", "trump"],
    "Won a presidential election with 85% or more of the Electoral College vote": ["washington", "monroe", "roosevelt_fd", "reagan", "nixon", "jefferson", "lincoln", "johnson_lb", "eisenhower", "pierce"],
    "Was a member of the Whig Party at least part of the time while president": ["harrison_wh", "tyler", "taylor", "fillmore"],
    "Did not serve in the U.S. military prior to becoming president": ["adams_j", "adams_jq", "vanburen", "cleveland", "wilson", "harding", "coolidge", "hoover", "roosevelt_fd", "clinton", "obama", "trump", "biden"],
    "Prior to becoming president, achieved the rank of general in the U.S. Armed Forces": ["washington", "grant", "eisenhower", "jackson", "harrison_wh", "taylor", "hayes", "garfield", "pierce", "arthur", "johnson_a", "harrison_b"],
    "Served in the U.S. Navy prior to becoming president": ["johnson_lb", "nixon", "ford", "kennedy", "bush_ghw", "carter"],
    "Served in the U.S. Air Force or U.S. Army Air Forces before becoming president": ["reagan", "bush_gw"],
    "Recipient of the Nobel Peace Prize": ["roosevelt_t", "wilson", "carter", "obama"],
    "Was never elected to the office of the U.S. presidency": ["tyler", "fillmore", "johnson_a", "arthur", "ford"],
    "Day of either birth or death was on the fourth of July": ["jefferson", "adams_j", "monroe", "coolidge"],
    "Born in January": ["fillmore", "mckinley", "roosevelt_fd", "nixon"],
    "Born in February": ["washington", "harrison_wh", "lincoln", "reagan"],
    "Born in March": ["madison", "jackson", "tyler", "cleveland"],
    "Born in April": ["jefferson", "monroe", "buchanan", "grant"],
    "Born in May": ["truman", "kennedy"],
    "Born in June": ["bush_ghw", "trump"],
    "Born in July": ["adams_jq", "coolidge", "ford", "bush_gw"],
    "Born in August": ["harrison_b", "hoover", "johnson_lb", "clinton", "obama"],
    "Born in October": ["adams_j", "hayes", "arthur", "roosevelt_t", "eisenhower", "carter"],
    "Born in November": ["polk", "taylor", "pierce", "garfield", "harding", "biden"],
    "Born in December": ["vanburen", "johnson_a", "wilson"],
    "Held the office of attorney general of a U.S. state": ["vanburen", "clinton"],
    "Once held the office of mayor of a town or city": ["johnson_a", "cleveland", "coolidge"],
    "Won and/or was nominated for a Grammy Award": ["truman", "kennedy", "nixon", "carter", "clinton", "obama"]
}

let superJSON = `[


    {
        "question": "Born in Virginia",
        "answer": ["washington", "jefferson", "madison", "monroe", "harrison_wh", "tyler", "taylor", "wilson"],
        "answerNumber": 8
    },

    {
        "question": "Born in Ohio",
        "answer": ["grant", "hayes", "garfield", "harrison_b", "mckinley", "taft", "harding"],
        "answerNumber": 7
    },


    {
        "question": "Born in Massachusetts",
        "answer": ["adams_j", "adams_jq", "kennedy", "bush_ghw"],
        "answerNumber": 4
    }, {
        "question": "Born in New York",
        "answer": ["roosevelt_t", "roosevelt_fd", "vanburen", "trump", "fillmore"],
        "answerNumber": 5
    },

    {
        "question": "Born in Pennsylvania",
        "answer": ["buchanan", "biden"],
        "answerNumber": 2
    },

    {
        "question": "Born in Texas",
        "answer": ["eisenhower", "johnson_lb"],
        "answerNumber": 2
    },

    {
        "question": "Born in Vermont",
        "answer": ["arthur", "coolidge"],
        "answerNumber": 2
    },

    {
        "question": "Born as a British citizen",
        "answer": ["washington", "adams_j", "jefferson", "madison", "monroe", "jackson", "adams_jq", "harrison_wh"],
        "answerNumber": 8
    },

    {
        "question": "Issued no vetoes as president",
        "answer": ["adams_j", "jefferson", "adams_jq", "harrison_wh", "taylor", "fillmore", "garfield"],
        "answerNumber": 7
    },

    {
        "question": "Issued more than 50 or more vetoes as president",
        "answer": ["roosevelt_fd", "cleveland", "truman", "eisenhower", "grant", "roosevelt_t", "reagan", "ford", "coolidge"],
        "answerNumber": 9
    },

    {
        "question": "Never elected to public office before becoming president",
        "answer": ["taylor", "grant", "hoover", "eisenhower", "trump"],
        "answerNumber": 5
    },


    {
        "question": "Served as U.S. vice president",
        "answer": ["adams_j", "jefferson", "vanburen", "tyler", "fillmore", "johnson_a", "arthur", "roosevelt_t", "coolidge", "truman", "nixon", "johnson_lb", "ford", "bush_ghw", "biden"],
        "answerNumber": 15
    },


    {
        "question": "Served as U.S. secretary of state",
        "answer": ["jefferson", "madison", "monroe", "adams_jq", "vanburen", "buchanan"],
        "answerNumber": 6
    },

    {
        "question": "Served as a U.S. senator",
        "answer": ["tyler", "monroe", "johnson_lb", "johnson_a", "jackson", "buchanan", "harding", "harrison_wh", "vanburen", "pierce", "truman", "kennedy", "adams_jq", "obama", "harrison_b", "biden", "nixon"],
        "answerNumber": 17
    },

    {
        "question": "Served as a member of the U.S. House of Representatives",
        "answer": ["tyler", "madison", "bush_ghw", "johnson_lb", "johnson_a", "polk", "jackson", "buchanan", "mckinley", "garfield", "hayes", "harrison_wh", "fillmore", "pierce", "ford", "kennedy", "adams_jq", "lincoln", "nixon"],
        "answerNumber": 19
    },

    {
        "question": "Served as a governor of a U.S. state (not territory)",
        "answer": ["tyler", "monroe", "jefferson", "bush_gw", "johnson_a", "polk", "mckinley", "hayes", "roosevelt_fd", "roosevelt_t", "cleveland", "vanburen", "wilson", "coolidge", "carter", "reagan", "clinton"],
        "answerNumber": 17
    },

    {
        "question": "Served as a member of a colonial legislature under the Kingdom of Great Britain.",
        "answer": ["washington", "adams_j", "jefferson"],
        "answerNumber": 3
    },

    {
        "question": "Served as a U.S. ambassador",
        "answer": ["adams_j", "jefferson", "monroe", "adams_jq", "vanburen", "harrison_wh", "buchanan", "bush_ghw"],
        "answerNumber": 8
    },

    {
        "question": "Served as a U.S. Secretary of War (or Acting Secretary of War)",
        "answer": ["monroe", "grant", "taft"],
        "answerNumber": 3
    },

    {
        "question": "Died while president",
        "answer": ["harrison_wh", "taylor", "lincoln", "garfield", "mckinley", "harding", "roosevelt_fd", "kennedy"],
        "answerNumber": 8
    },


    {
        "question": "President before the age of 50",
        "answer": ["roosevelt_t", "kennedy", "clinton", "grant", "obama", "cleveland", "pierce", "garfield", "polk"],
        "answerNumber": 9
    },

    {
        "question": "Presidency included time over the age of 70",
        "answer": ["biden", "reagan", "trump", "eisenhower"],
        "answerNumber": 4
    },

    {
        "question": "Alive past the age of 90",
        "answer": ["hoover", "adams_j", "reagan", "ford", "bush_ghw", "carter"],
        "answerNumber": 6
    },

    {
        "question": "Did not graduate with a college degree",
        "answer": ["washington", "monroe", "jackson", "vanburen", "harrison_wh", "taylor", "fillmore", "lincoln", "johnson_a", "cleveland", "mckinley", "truman"],
        "answerNumber": 12
    },
    {
        "question": "Undergraduate and/or graduate degree from Harvard University",
        "answer": ["adams_j", "adams_jq", "roosevelt_t", "roosevelt_fd", "kennedy", "bush_gw", "hayes", "obama"],
        "answerNumber": 8
    },

    {
        "question": "Undergraduate and/or graduate degree from Yale University",
        "answer": ["taft", "bush_ghw", "bush_gw", "ford", "clinton"],
        "answerNumber": 5
    },

    {
        "question": "Served two or more full terms as president",
        "answer": ["roosevelt_fd", "jefferson", "madison", "monroe", "jackson", "grant", "cleveland", "wilson", "eisenhower", "reagan", "clinton", "bush_gw", "obama", "washington"],
        "answerNumber": 14
    },

    {
        "question": "Served exactly one full term as president (no more, no less)",
        "answer": ["adams_j", "adams_jq", "vanburen", "polk", "pierce", "buchanan", "hayes", "harrison_b", "taft", "hoover", "carter", "bush_ghw", "trump"],
        "answerNumber": 13
    },

    {
        "question": "Served less than one complete term as president",
        "answer": ["harrison_wh", "garfield", "taylor", "harding", "ford", "fillmore", "kennedy", "biden", "arthur", "johnson_a", "tyler"],
        "answerNumber": 11
    },

    {
        "question": "Impeached by the U.S. House of Representatives",
        "answer": ["johnson_a", "clinton", "trump"],
        "answerNumber": 3
    },

    {
        "question": "Issued more than 500 executive orders",
        "answer": ["roosevelt_fd", "wilson", "coolidge", "roosevelt_t", "hoover", "truman", "taft", "harding"],
        "answerNumber": 8
    },

    {
        "question": "Appointed five or more justices to the U.S. Supreme Court",
        "answer": ["washington", "roosevelt_fd", "taft", "jackson", "lincoln", "eisenhower"],
        "answerNumber": 6
    },

    {
        "question": "Did not appoint any justices to the U.S. Supreme Court",
        "answer": ["harrison_wh", "taylor", "johnson_a", "carter"],
        "answerNumber": 4
    },

    {
        "question": "Had multiple different vice presidents",
        "answer": ["jefferson", "madison", "jackson", "lincoln", "grant", "cleveland", "mckinley", "roosevelt_fd", "nixon"],
        "answerNumber": 9
    },

    {
        "question": "Was known to be a member of the Freemasons",
        "answer": ["washington", "monroe", "jackson", "polk", "buchanan", "johnson_a", "garfield", "mckinley", "roosevelt_t", "taft", "harding", "roosevelt_fd", "truman", "ford"],
        "answerNumber": 14
    },

    {
        "question": "Won a presidential election while losing the popular vote",
        "answer": ["adams_jq", "hayes", "harrison_b", "bush_gw", "trump"],
        "answerNumber": 5
    },

    {
        "question": "Won a presidential election with 85% or more of the Electoral College vote",
        "answer": ["washington", "monroe", "roosevelt_fd", "reagan", "nixon", "jefferson", "lincoln", "johnson_lb", "eisenhower", "pierce"],
        "answerNumber": 10
    },

    {
        "question": "Was a member of the Whig Party at least part of the time while president",
        "answer": ["harrison_wh", "tyler", "taylor", "fillmore"],
        "answerNumber": 4
    },

    {
        "question": "Did not serve in the U.S. military prior to becoming president",
        "answer": ["adams_j", "adams_jq", "vanburen", "cleveland", "wilson", "harding", "coolidge", "hoover", "roosevelt_fd", "clinton", "obama", "trump", "biden"],
        "answerNumber": 13
    },

    {
        "question": "Prior to becoming president, achieved the rank of general in the U.S. Armed Forces",
        "answer": ["washington", "grant", "eisenhower", "jackson", "harrison_wh", "taylor", "hayes", "garfield", "pierce", "arthur", "johnson_a", "harrison_b"],
        "answerNumber": 12
    },

    {
        "question": "Served in the U.S. Navy prior to becoming president",
        "answer": ["johnson_lb", "nixon", "ford", "kennedy", "bush_ghw", "carter"],
        "answerNumber": 6
    },

    {
        "question": "Served in the U.S. Air Force or U.S. Army Air Forces before becoming president",
        "answer": ["reagan", "bush_gw"],
        "answerNumber": 2
    },

    {
        "question": "Recipient of the Nobel Peace Prize",
        "answer": ["roosevelt_t", "wilson", "carter", "obama"],
        "answerNumber": 4
    },

    {
        "question": "Was never elected to the office of the U.S. presidency",
        "answer": ["tyler", "fillmore", "johnson_a", "arthur", "ford"],
        "answerNumber": 5
    },

    {
        "question": "Day of either birth or death was on the fourth of July.",
        "answer": ["jefferson", "adams_j", "monroe", "coolidge"],
        "answerNumber": 4
    },

    {
        "question": "Born in January",
        "answer": ["fillmore", "mckinley", "roosevelt_fd", "nixon"],
        "answerNumber": 4
    },

    {
        "question": "Born in February",
        "answer": ["washington", "harrison_wh", "lincoln", "reagan"],
        "answerNumber": 4
    },

    {
        "question": "Born in March",
        "answer": ["madison", "jackson", "tyler", "cleveland"],
        "answerNumber": 4
    },

    {
        "question": "Born in April",
        "answer": ["jefferson", "monroe", "buchanan", "grant"],
        "answerNumber": 4
    },

    {
        "question": "Born in May",
        "answer": ["truman", "kennedy"],
        "answerNumber": 2
    },

    {
        "question": "Born in June",
        "answer": ["bush_ghw", "trump"],
        "answerNumber": 2
    },
    {
        "question": "Born in July",
        "answer": ["adams_jq", "coolidge", "ford", "bush_gw"],
        "answerNumber": 4
    },
    {
        "question": "Born in August",
        "answer": ["harrison_b", "hoover", "johnson_lb", "clinton", "obama"],
        "answerNumber": 5
    },

    {
        "question": "Born in October",
        "answer": ["adams_j", "hayes", "arthur", "roosevelt_t", "eisenhower", "carter"],
        "answerNumber": 6
    },

    {
        "question": "Born in November",
        "answer": ["polk", "taylor", "pierce", "garfield", "harding", "biden"],
        "answerNumber": 6
    },

    {
        "question": "Born in December",
        "answer": ["vanburen", "johnson_a", "wilson"],
        "answerNumber": 3
    },

    {
        "question": "Held the office of attorney general of a U.S. state",
        "answer": ["vanburen", "clinton"],
        "answerNumber": 2
    },

    {
        "question": "Once held the office of mayor of a town or city",
        "answer": ["johnson_a", "cleveland", "coolidge"],
        "answerNumber": 3
    },
    
    {
        "question": "Won or was nominated for a Grammy Award",
        "answer": ["truman", "kennedy", "nixon", "carter", "clinton", "obama"],
        "answerNumber": 6
    }, 

    {
        "question": "Signed the Declaration of Independence or directly descended from one of its signers",
        "answer": ["adams_j", "jefferson", "harrison_wh", "harrison_b"],
        "answerNumber": 4
    },

    {
        "question": "Had one or more pet oppossums",
        "answer": ["harrison_b", "hoover"],
        "answerNumber": 2,
        "difficulty": "hard"
    },
    
    {
        "question": "Served as chancellor of the College of William & Mary",
        "answer": ["washington", "tyler"],
        "answerNumber": 2,
        "difficulty": "hard"
    }    



]`;

// The following set of questions are unique for having only a single answer.

let superJSON2 = `[
    {
        "question": "Born in September",
        "answer": ["taft"],
        "answerNumber": 1
    },

    {
        "question": "Born in Arkansas",
        "answer": ["clinton"],
        "answerNumber": 1
    },

    {
        "question": "Born in California",
        "answer": ["nixon"],
        "answerNumber": 1
    },

    {
        "question": "Born in Connecticut",
        "answer": ["bush_gw"],
        "answerNumber": 1
    },

    {
        "question": "Born in Georgia",
        "answer": ["carter"],
        "answerNumber": 1
    },

    {
        "question": "Born in Hawaii",
        "answer": ["obama"],
        "answerNumber": 1
    },

    {
        "question": "Born in Illinois",
        "answer": ["reagan"],
        "answerNumber": 1
    },

    {
        "question": "Born in Iowa",
        "answer": ["hoover"],
        "answerNumber": 1
    },

    {
        "question": "Born in Kentucky",
        "answer": ["lincoln"],
        "answerNumber": 1
    },

    {
        "question": "Born in Missouri",
        "answer": ["truman"],
        "answerNumber": 1
    },

    {
        "question": "Born in Nebraska",
        "answer": ["ford"],
        "answerNumber": 1
    },

    {
        "question": "Born in New Hampshire",
        "answer": ["pierce"],
        "answerNumber": 1
    },

    {
        "question": "Born in New Jersey",
        "answer": ["cleveland"],
        "answerNumber": 1
    },

    {
        "question": "Served non-consecutive terms as president",
        "answer": ["cleveland"],
        "answerNumber": 1
    },

    {
        "question": "Held the office of govenor of Indiana Territory",
        "answer": ["harrison_wh"],
        "answerNumber": 1
    },

    {
        "question": "Held the office of governor-general of the Philippines",
        "answer": ["taft"],
        "answerNumber": 1
    },

    {
        "question": "Held the office of New York State Comptroller",
        "answer": ["fillmore"],
        "answerNumber": 1
    },

    {
        "question": "Held the office of sheriff",
        "answer": ["cleveland"],
        "answerNumber": 1
    },

    {
        "question": "Served as U.S. Secretary of Commerce",
        "answer": ["hoover"],
        "answerNumber": 1
    },

    {
        "question": "Served as Director of Central Intelligence",
        "answer": ["bush_ghw"],
        "answerNumber": 1
    },

    {
        "question": "Served as Collector of the Port of New York",
        "answer": ["arthur"],
        "answerNumber": 1
    },

    {
        "question": "Served as speaker of the U.S. House of Representatives",
        "answer": ["polk"],
        "answerNumber": 1
    },

    {
        "question": "Served as president pro tempore of the U.S. Senate",
        "answer": ["tyler"],
        "answerNumber": 1
    },

    {
        "question": "Native speaker of Dutch",
        "answer": ["vanburen"],
        "answerNumber": 1
    },

    {
        "question": "Never affiliated with a political party while president",
        "answer": ["washington"],
        "answerNumber": 1
    },

    {
        "question": "Known as the American Cincinnatus",
        "answer": ["washington"],
        "answerNumber": 1
    },

    {
        "question": "Served as official surveyor of Culpeper County",
        "answer": ["washington"],
        "answerNumber": 1
    },

    {
        "question": "Member of the Federalist Party",
        "answer": ["adams_j"],
        "answerNumber": 1
    }, 

    {
        "question": "Founded the University of Virginia",
        "answer": ["jefferson"],
        "answerNumber": 1
    }, 

    {
        "question": "Served as commissioner and governor of the territories of East and West Florida",
        "answer": ["jackson"],
        "answerNumber": 1
    }, 

    {
        "question": "First president to sign a Declaration of War",
        "answer": ["madison"],
        "answerNumber": 1
    }, 

    {
        "question": "Spent his childhood in Louisville, Kentucky, and is buried in Jefferson County",
        "answer": ["taylor"],
        "answerNumber": 1
    }, 

    {
        "question": "Awarded the Medal of Honor",
        "answer": ["roosevelt_t"],
        "answerNumber": 1
    },

    {
        "question": "Served as Chief Justice of the U.S. Supreme Court",
        "answer": ["taft"],
        "answerNumber": 1
    },

    {
        "question": "Served as dean of the University of Cincinnati College of Law",
        "answer": ["taft"],
        "answerNumber": 1
    },

    {
        "question": "Earned a PhD from Johns Hopkins University",
        "answer": ["wilson"],
        "answerNumber": 1
    },

    {
        "question": "Awarded the Navy and Marine Corps Medal",
        "answer": ["kennedy"],
        "answerNumber": 1
    },

    {
        "question": "Awarded the Distinguished Flying Cross",
        "answer": ["bush_ghw"],
        "answerNumber": 1
    },

    {
        "question": "Had a Newfoundland dog named Veto",
        "answer": ["garfield"],
        "answerNumber": 1
    }
    
]`;


// TO DO - Need to make sure there are THREE one-answer questions for each president. The reason for this is that
// if a user guesses wrong (and the question is skipped), the user might need a question with that president to
// still remain available for a future question. Since users have three chances to guess an answer (two failures
// and the one more chance), there needs to be the POSSIBILITY (however rare) that each president would have at least
// three questions in which that president GUARANTEED to be an available answer.

// TO DO - Maybe instead of arranging difficulty level by number of answers remaining, maybe each question should be
// labeled DIRECTLY as "easy" or "hard." All single-answer questions could be "HARD" by default, BOTH questions that
// start out as single-answer AND questions that later become single-answer questions. That's the same as what I have
// now, but with this direct "easy"/"hard" labeling method, I could also designate some multi-answer questions as
// being "hard" as well. Just because a question has multiple available answers doesn't mean that it is "easy" per se.

superJSON = JSON.parse(superJSON);
console.log("superJSON");
console.log(superJSON);
superJSON2 = JSON.parse(superJSON2);
console.log("superJSON2");
console.log(superJSON2);
superJSON = superJSON.concat(superJSON2);

console.log(superJSON[1]);
console.log("this should have everything");
console.log(superJSON);


