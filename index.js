// const result = [
// {
//     label:"Kenneth&#39;s Hair Salon &amp; Day Spas",
//     value:"optum"
// }
// { 
//     label: "Weldall Manufacturing Inc",
//     value: "optum"
//  }
// {
//     label: "Weldall Manufacturing IncWeldall Manufacturing Inc",
//     value: "optum"

// }
// {
//     label: "My Sport Clubs",
//     value:"optum"
// }
// {
//     label:"Missouri Southern State University",
//     value: "cigna"
// }
// {

//     label: "Ace Hardware Corp. Coooperative Group Health Plan",
//      value:"optum"
// }
// {
//     label:"Palm Beach Gardens Fire Rescue Family",
//     value: "aetna"
// }
// {
//     label: "Bae Systems",
//     value: "cigna"
// }
// ]

const raw_data = {
 "data": [
    {
        "optum":"Kenneth&#39;s Hair Salon &amp; Day Spas"
    },

    {
        "optum": "Weldall Manufacturing Inc"
    },

    {
        "optum":"Weldall Manufacturing IncWeldall Manufacturing Inc",
        "aetna": "My Sport Clubs",
        "cigna" : "Missouri Southern State University"
    }, 

    {
        "optum": "Ace Hardware Corp. Coooperative Group Health Plan",
        "aetna": "Palm Beach Gardens Fire Rescue Family",
        "cigna":  "Bae Systems"
    }

    ]
}

    
    
     
    const result = []
    raw_data.data.forEach(item => {
        for(const key in item) {
            result.push({
                label: item[key],
                value: key
            })
        }
    })
    
    console.log(result);