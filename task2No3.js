const developers = [
    {
      name: "Vee",
      laptops: [
        "Dell"
      ],
      phones: [
        "Samsung",
        "Xiaomi"
      ],
      computerSetups: [
        {
          brand: "Lenovo",
          monitors: 1,
          keyboards: 1,
          mice: 1,
          speakers: 1
        }
      ]
    },
    {
      name: "Katlego",
      laptops: [
        "HP",
        "Samsung"
      ],
      phones: [
        "Apple",
        "Samsung",
        "Tecno",
        "Samsung"
      ],
      computerSetups: [
        {
          brand: "Lenovo",
          monitors: 2,
          keyboards: 1,
          mice: 1,
          speakers: 2
        }, 
        {
          brand: "Dell",
          monitors: 1,
          keyboards: 1,
          mice: 1,
          speakers: 1
        }
      ]
    },
    {
      name: "Rethabile",
      laptops: [
        "Samsung"
      ],
      phones: [
        "Samsung",
        "Huawei",
        "Poco"
      ],
      computerSetups: [
        {
          brand: "Asus",
          monitors: 1,
          keyboards: 1,
          mice: 1,
          speakers: 1
        }, 
        {
          brand: "Acer",
          monitors: 1,
          keyboards: 1,
          mice: 1,
          speakers: 2
        }
      ]
    },
    {
      name: "Gift",
      laptops: [],
      phones: [
        "Samsung"
      ],
      computerSetups: [
        {
          brand: "Acer",
          monitors: 3,
          keyboards: 1,
          mice: 1,
          speakers: 2
        }, 
        {
          brand: "HP",
          monitors: 2,
          keyboards: 1,
          mice: 1,
          speakers: 2
        }
      ]
    },
    {
      name: "Thokozile",
      laptops: [
        "Lenovo"
      ],
      phones: [
        "Apple"
      ],
      computerSetups: [
        {
          brand: "Dell",
          monitors: 1,
          keyboards: 1,
          mice: 1,
          speakers: 2
        }, 
        {
          brand: "Asus",
          monitors: 1,
          keyboards: 0,
          mice: 1,
          speakers: 1
        }, 
        {
          brand: "Dell",
          monitors: 1,
          keyboards: 1,
          mice: 1,
          speakers: 1
        }
      ]
    }
  ]
// a. Create an array with just the names of all the developers.
let names = [];
for (let i = 0; i < developers.length; i++) {
  names.push(developers[i].name);
}
console.log('Developer Names:', names);

// b. Count how many total phones all the developers have.
let totalPhones = 0;
for (let i = 0; i < developers.length; i++) {
  totalPhones += developers[i].phones.length;
}
console.log('Total Phones:', totalPhones);

// c. Count the number of incomplete setups.
let incompleteCount = 0;
for (let i = 0; i < developers.length; i++) {
  let setups = developers[i].computerSetups;
  for (let j = 0; j < setups.length; j++) {
    if (setups[j].monitors === 0 || setups[j].keyboards === 0 || setups[j].mice === 0 || setups[j].speakers === 0) {
      incompleteCount++;
    }
  }
}
console.log('Incomplete Setups:', incompleteCount);

// d. Check what is the most trusted phone brand.
let phoneCounts = {};
for (let i = 0; i < developers.length; i++) {
  let phones = developers[i].phones;
  for (let j = 0; j < phones.length; j++) {
    let phone = phones[j];
    if (phoneCounts[phone]) {
      phoneCounts[phone]++;
    } else {
      phoneCounts[phone] = 1;
    }
  }
}

let mostTrustedPhone = null;
let maxCount = 0;
for (let phone in phoneCounts) {
  if (phoneCounts[phone] > maxCount) {
    maxCount = phoneCounts[phone];
    mostTrustedPhone = phone;
  }
}
console.log('Most Trusted Phone:', mostTrustedPhone);

// e. Check what phone brand is least trusted.
let leastTrustedPhone = null;
let minCount = Infinity;
for (let phone in phoneCounts) {
  if (phoneCounts[phone] < minCount) {
    minCount = phoneCounts[phone];
    leastTrustedPhone = phone;
  }
}
console.log('Least Trusted Phone:', leastTrustedPhone);

// f. Check how many people do not have a phone.
let noPhoneCount = 0;
for (let i = 0; i < developers.length; i++) {
  if (developers[i].phones.length === 0) {
    noPhoneCount++;
  }
}
console.log('No Phone Count:', noPhoneCount);

// g. Check how many people do not have a laptop.
let noLaptopCount = 0;
for (let i = 0; i < developers.length; i++) {
  if (developers[i].laptops.length === 0) {
    noLaptopCount++;
  }
}
console.log('No Laptop Count:', noLaptopCount);

// h. Check how many people do not have a computer setup (desktop).
let noSetupCount = 0;
for (let i = 0; i < developers.length; i++) {
  if (developers[i].computerSetups.length === 0) {
    noSetupCount++;
  }
}
console.log('No Setup Count:', noSetupCount);

// i. Check which developer has the most total gadgets.
let maxGadgets = 0;
let mostGadgetsDeveloper = null;

for (let i = 0; i < developers.length; i++) {
  let gadgetsCount = developers[i].laptops.length + developers[i].phones.length + developers[i].computerSetups.length;
  if (gadgetsCount > maxGadgets) {
    maxGadgets = gadgetsCount;
    mostGadgetsDeveloper = developers[i];
  }
}
console.log('Most Gadgets:', mostGadgetsDeveloper.name, `(${maxGadgets})`);

// j. Check which developer has the most phones.
let maxPhones = 0;
let mostPhonesDeveloper = null;

for (let i = 0; i < developers.length; i++) {
  let phoneCount = developers[i].phones.length;
  if (phoneCount > maxPhones) {
    maxPhones = phoneCount;
    mostPhonesDeveloper = developers[i];
  }
}
console.log('Most Phones:', mostPhonesDeveloper.name, `(${maxPhones})`);


// k. Check which developer has the most computer setups.
let maxSetups = 0;
let mostSetupsDeveloper = null;

for (let i = 0; i < developers.length; i++) {
  let setupCount = developers[i].computerSetups.length;
  if (setupCount > maxSetups) {
    maxSetups = setupCount;
    mostSetupsDeveloper = developers[i];
  }
}

console.log('Most Setups:', mostSetupsDeveloper.name, `(${maxSetups})`);


// l. Check which developer has the most monitors (combining all their computer setups).
let maxMonitors = 0;
let mostMonitorsD = null;

for (let i = 0; i < developers.length; i++) {
  let monitorCount = 0;
  for (let j = 0; j < developers[i].computerSetups.length; j++) {
    monitorCount += developers[i].computerSetups[j].monitors;
  }
  if (monitorCount > maxMonitors) {
    maxMonitors = monitorCount;
    mostMonitorsD = developers[i];
  }
}
console.log('Most Monitors:', mostMonitorsD.name, `(${maxMonitors})`);

 
      
      