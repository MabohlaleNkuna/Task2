const developers = [
    {
      name: "Vee",
      laptops: ["Dell"],
      phones: ["Samsung", "Xiaomi"],
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
      laptops: ["HP", "Samsung"],
      phones: ["Apple", "Samsung", "Tecno", "Samsung"],
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
      laptops: ["Samsung"],
      phones: ["Samsung", "Huawei", "Poco"],
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
      phones: ["Samsung"],
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
      laptops: ["Lenovo"],
      phones: ["Apple"],
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
  function getDeveloperNames(developers) {
    let names = [];
    for (let i = 0; i < developers.length; i++) {
      names.push(developers[i].name);
    }
    return names;
  }
  console.log('Developer Names:', getDeveloperNames(developers));
  
  // b. Count how many total phones all the developers have.
  function getTotalPhones(developers) {
    let totalPhones = 0;
    for (let i = 0; i < developers.length; i++) {
      totalPhones += developers[i].phones.length;
    }
    return totalPhones;
  }
  console.log('Total Phones:', getTotalPhones(developers));
  
  // c. Count the number of incomplete setups.
  function getIncompleteSetups(developers) {
    let incompleteCount = 0;
    for (let i = 0; i < developers.length; i++) {
      let setups = developers[i].computerSetups;
      for (let j = 0; j < setups.length; j++) {
        if (setups[j].monitors === 0 || setups[j].keyboards === 0 || setups[j].mice === 0 || setups[j].speakers === 0) {
          incompleteCount++;
        }
      }
    }
    return incompleteCount;
  }
  console.log('Incomplete Setups:', getIncompleteSetups(developers));
  
  // d. Check what is the most trusted phone brand.
  function getMostTrustedPhone(developers) {
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
    return mostTrustedPhone;
  }
  console.log('Most Trusted Phone:', getMostTrustedPhone(developers));
  
  // e. Check what phone brand is least trusted.
  function getLeastTrustedPhone(developers) {
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
  
    let leastTrustedPhone = null;
    let minCount = Infinity;
    for (let phone in phoneCounts) {
      if (phoneCounts[phone] < minCount) {
        minCount = phoneCounts[phone];
        leastTrustedPhone = phone;
      }
    }
    return leastTrustedPhone;
  }
  console.log('Least Trusted Phone:', getLeastTrustedPhone(developers));
  
  // f. Check how many people do not have a phone.
  function getNoPhoneCount(developers) {
    let noPhoneCount = 0;
    for (let i = 0; i < developers.length; i++) {
      if (developers[i].phones.length === 0) {
        noPhoneCount++;
      }
    }
    return noPhoneCount;
  }
  console.log('No Phone Count:', getNoPhoneCount(developers));
  
  // g. Check how many people do not have a laptop.
  function getNoLaptopCount(developers) {
    let noLaptopCount = 0;
    for (let i = 0; i < developers.length; i++) {
      if (developers[i].laptops.length === 0) {
        noLaptopCount++;
      }
    }
    return noLaptopCount;
  }
  console.log('No Laptop Count:', getNoLaptopCount(developers));
  
  // h. Check how many people do not have a computer setup (desktop).
  function getNoSetupCount(developers) {
    let noSetupCount = 0;
    for (let i = 0; i < developers.length; i++) {
      if (developers[i].computerSetups.length === 0) {
        noSetupCount++;
      }
    }
    return noSetupCount;
  }
  console.log('No Setup Count:', getNoSetupCount(developers));
  
  // i. Check which developer has the most total gadgets.
  function getMostGadgetsDeveloper(developers) {
    let maxGadgets = 0;
    let mostGadgetsDeveloper = null;
  
    for (let i = 0; i < developers.length; i++) {
      let gadgetsCount = developers[i].laptops.length + developers[i].phones.length + developers[i].computerSetups.length;
      if (gadgetsCount > maxGadgets) {
        maxGadgets = gadgetsCount;
        mostGadgetsDeveloper = developers[i];
      }
    }
    return mostGadgetsDeveloper.name;
  }
  console.log('Most Gadgets:', getMostGadgetsDeveloper(developers));
  
  // j. Check which developer has the most phones.
  function getMostPhonesDeveloper(developers) {
    let maxPhones = 0;
    let mostPhonesDeveloper = null;
  
    for (let i = 0; i < developers.length; i++) {
      let phoneCount = developers[i].phones.length;
      if (phoneCount > maxPhones) {
        maxPhones = phoneCount;
        mostPhonesDeveloper = developers[i];
      }
    }
    return `${mostPhonesDeveloper.name} (${maxPhones})`;
  }
  console.log('Most Phones:', getMostPhonesDeveloper(developers));
  
  // k. Check which developer has the most computer setups.
  function getMostSetupsDeveloper(developers) {
    let maxSetups = 0;
    let mostSetupsDeveloper = null;
  
    for (let i = 0; i < developers.length; i++) {
      let setupCount = developers[i].computerSetups.length;
      if (setupCount > maxSetups) {
        maxSetups = setupCount;
        mostSetupsDeveloper = developers[i];
      }
    }
    return `${mostSetupsDeveloper.name} (${maxSetups})`;
  }
  console.log('Most Setups:', getMostSetupsDeveloper(developers));
  
  // l. Check which developer has the most monitors (combining all their computer setups).
  function getMostMonitorsDeveloper(developers) {
    let maxMonitors = 0;
    let mostMonitorsDeveloper = null;
  
    for (let i = 0; i < developers.length; i++) {
      let monitorCount = 0;
      for (let j = 0; j < developers[i].computerSetups.length; j++) {
        monitorCount += developers[i].computerSetups[j].monitors;
      }
      if (monitorCount > maxMonitors) {
        maxMonitors = monitorCount;
        mostMonitorsDeveloper = developers[i];
      }
    }
    return `${mostMonitorsDeveloper.name} (${maxMonitors})`;
  }
  console.log('Most Monitors:', getMostMonitorsDeveloper(developers));
  