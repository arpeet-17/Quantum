import courses from "./dashboard-data/dashboard-data.json";
import { getDashboardItem } from "./utils/utils";

const dashboardItemsElement = document.querySelector(
  "#dashboard-items"
) as HTMLElement;
const courseCountElement = document.querySelector(
  "#course-count"
) as HTMLElement;
const courseCountHeadingElement = document.querySelector(
  "#course-count-heading"
) as HTMLElement;

if (courseCountElement)
  courseCountElement.innerHTML = `Showing ${courses.length} of ${courses.length} courses`;
if (courseCountHeadingElement)
  courseCountHeadingElement.innerHTML = `${courses.length} <span>Courses</span>`;

for (const course of courses) {
  if (dashboardItemsElement)
    dashboardItemsElement.innerHTML += getDashboardItem(course);
}

//dropdown.js
//import { populateDropdown } from "./utils";
export {};
const hamburgerLinks = document.getElementById("test1");
const menudiv=document.getElementById("menu-div");
menudiv.classList.add("menu-dropdown");
const announcementdrop = document.getElementById("test");
const announcementdiv = document.getElementById("announcement-div");
announcementdiv.classList.add("announcement-dropdown");
const alertdrop = document.getElementById("test2");
const alertdiv=document.getElementById("alert-div");
let isDropdownVisible = false;
alertdiv.classList.add("alert-dropdown");
let isMouseInDropdown = false;
console.log(alertdrop);
const dropdown: {
  dashboard: {
    address: string;
    childLink: string[];
  };
  content: {
    address: string;
    childLink:string[];
  };
  users: {
    address: string;
    childLink: string[];
  };
  reports: {
    address: string;
    childLink: string[];
  };
  admin: {
    address: string;
    childLink: string[];
  };
} = {
  dashboard: {
    address: "#",
    childLink: [""],
  },
  content: {
    address: "#",
    childLink: ["course catalog"],
  },
  users: {
    address: "#",
    childLink: [""],
  },
  reports: {
    address: "#",
    childLink: [""],
  },
  admin: {
    address: "#",
    childLink: [""],
  },
};
// export function populateDropdown(dropdown: {
//   dashboard: {
//     address: string;
//     childLink: string[];
//   };
//   content: {
//     address: string;
//     childLink:string[];
//   };
//   users: {
//     address: string;
//     childLink: string[];
//   };
//   reports: {
//     address: string;
//     childLink: string[];
//   };
//   admin: {
//     address: string;
//     childLink: string[];
//   };
// },isVisible:boolean) {
//   const list = document.createElement("ul");
//   list.classList.add("menu-hover");
//   for (let key in dropdown) {
//     let item = document.createElement("li");
//     let itemLink = document.createElement("a");
//     itemLink.setAttribute("href", dropdown[key].address);
//     itemLink.innerText = key;
//     // const dashboardChildLinks: string[] = dropdown.dashboard.childLink;
//     // for(let subkey in dashboardChildLinks)
//     // {
//     //   const sublist = document.createElement("ul");
//     //   sublist.classList.add("submenu-click");
//     //   let subitem = document.createElement("li");
//     //   let subitemLink = document.createElement("a");
//     //   subitemLink.setAttribute("href",`${dropdown[key].address}/${subkey}` );
//     //   subitemLink.innerText = subkey;
//     //   subitem.appendChild(subitemLink);
//     //   sublist.appendChild(subitem);
//     //   itemLink.appendChild(sublist);
//     // }
//     item.appendChild(itemLink);
//     let arrowDownLink=document.createElement("a");
//     arrowDownLink.setAttribute("href", "#");
//     arrowDownLink.classList.add("arrowdown-click");
//     let arrowDown = document.createElement("img");
//     arrowDown.setAttribute("src", "assets/icons/arrow-down-menu.svg");
//     arrowDown.setAttribute("alt", "an arrow down icon");
//     arrowDownLink.appendChild(arrowDown);
//     item.appendChild(arrowDownLink);
//     list.appendChild(item);
//   }
//   menudiv?.appendChild(list);
// }
export function populateDropdown(dropdown: {
  dashboard: {
        address: string;
        childLink: string[];
      };
      content: {
        address: string;
        childLink:string[];
      };
      users: {
        address: string;
        childLink: string[];
      };
      reports: {
        address: string;
        childLink: string[];
      };
      admin: {
        address: string;
        childLink: string[];
      };
  // Add other properties if needed
})  {
  const list = document.createElement("ul");
  list.classList.add("menu-hover");
  for (let key in dropdown) {
    const item = document.createElement("li");
    const itemLink = document.createElement("a");
    itemLink.setAttribute("href", dropdown[key].address);
    itemLink.innerText = key;
    item.appendChild(itemLink);

    const arrowDownLink = document.createElement("a");
    arrowDownLink.setAttribute("href", "#");
    arrowDownLink.classList.add("arrowdown-click");

    const arrowDown = document.createElement("img");
    arrowDown.setAttribute("src", "assets/icons/arrow-down-menu.svg");
    arrowDown.setAttribute("alt", "an arrow down icon");
    arrowDownLink.appendChild(arrowDown);
    let isClick:boolean=false;
    arrowDownLink.addEventListener("click", (event) => {
      event.preventDefault();
      
      const sublist = document.createElement("ul");
      sublist.classList.add("submenu-click");

      // Access the corresponding childLink array for the clicked item
      const childLinks = dropdown[key].childLink;

      // Create list items for each childLink
      for (let subLink of childLinks) {
        const subitem = document.createElement("li");
        const subitemLink = document.createElement("a");
        subitemLink.setAttribute("href", `${dropdown[key].address}/${subLink}`);
        subitemLink.innerText = subLink;
        subitem.appendChild(subitemLink);
        sublist.appendChild(subitem);
      }
      isClick=true;
      // Append the sublist to the clicked item's parent
      item.appendChild(sublist);
    });

    item.appendChild(arrowDownLink);
    list.appendChild(item);
  }

  // Clear the previous menu content before adding the new menu

  if (menudiv) {
    //menudiv.innerHTML = ""; // Removed optional chaining
    menudiv.appendChild(list);
  }
}


// populateDropdown(dropdown)
// if (hamburgerLinks) {
//     hamburgerLinks.addEventListener('click', () => {
//       // Function to be called when the div is hovered
//       populateDropdown(dropdown);
//     });
//   }
populateDropdown(dropdown);

if (hamburgerLinks) {
    hamburgerLinks.addEventListener("mouseenter", function () {
    isDropdownVisible = true;
    populateDropdown(dropdown);
    // announcementdiv.style.display = "none";
    menudiv.style.display = "block";
  });

  hamburgerLinks.addEventListener("mouseleave", function () {
    isDropdownVisible = false;
    setTimeout(function () {
      if (!isMouseInDropdown) {
        menudiv.style.display = "none";
      }
    }, 100);
  });

  menudiv.addEventListener("mouseenter", function () {
    isMouseInDropdown = true;
  });

  menudiv.addEventListener("mouseleave", function () {
    isMouseInDropdown = false;
    setTimeout(function () {
      if (!isDropdownVisible) {
        menudiv.style.display = "none";
      }
    }, 100);
  });
}

//announcemt icon hover
const announcement: {
  PA: string;
  notice: string;
  isfileattached: boolean;
  nooffiles: number | string;
  isCourse: boolean;
  Course: string;
  datetime: string;
  iconenabled: boolean;
}[] = [
  {
    PA: "Wilson Kumar",
    notice: "No classes will be held on 21st Nov",
    isfileattached: true,
    nooffiles: 2,
    isCourse: false,
    Course: "",
    datetime: "15-Sep-2018 at 7:21 pm",
    iconenabled: true,
  },
  {
    PA: "Samson White",
    notice: "Guest lecture on Geometry on 20th September",
    isfileattached: true,
    nooffiles: 2,
    isCourse: false,
    Course: "",
    datetime: "15-Sep-2018 at 7:21 pm",
    iconenabled: false,
  },
  {
    PA: "Wilson Kumar",
    notice: "Additional course materials available on request",
    isfileattached: false,
    nooffiles: "",
    isCourse: true,
    Course: "Mathematics 101",
    datetime: "15-Sep-2018 at 7:21 pm",
    iconenabled: true,
  },
  {
    PA: "Wilson Kumar",
    notice: "No classes will be held on 25th Dec",
    isfileattached: false,
    nooffiles: "",
    isCourse: false,
    Course: "",
    datetime: "15-Sep-2018 at 7:21 pm",
    iconenabled: false,
  },
  {
    PA: "Wilson Kumar",
    notice: "Additional course materials available on request",
    isfileattached: false,
    nooffiles: "",
    isCourse: true,
    Course: "Mathematics 101",
    datetime: "15-Sep-2018 at 7:21 pm",
    iconenabled: false,
  },
];
export function populateAnnouncement(
  announcement: {
    PA: string;
    notice: string;
    isfileattached: boolean;
    nooffiles: number | string;
    isCourse: boolean;
    Course: string;
    datetime: string;
    iconenabled: boolean;
  }[]
) {
  const notices = document.createElement("div");
  notices.classList.add("announcement-hover");
  for (let i = 0; i < announcement.length; i++) {
    let notice = document.createElement("div");
    let noticeheaderdiv = document.createElement("div");
    noticeheaderdiv.classList.add("noticeheader-div");
    let noticeheader = document.createElement("div");
    noticeheader.innerText = `PA: ${announcement[i].PA}`;
    // let noticeheadercontent=document.createElement('div')
    // noticeheadercontent.innerText=announcement[i].PA
    noticeheaderdiv.appendChild(noticeheader);
    if (announcement[i].iconenabled) {
      notice.classList.add("checked-notice");
      let noticeheaderimage = document.createElement("img");
      noticeheaderimage.setAttribute(
        "src",
        "assets/icons/checkbox-checked.svg"
      );
      noticeheaderimage.setAttribute("alt", "a checkbox checked");
      noticeheaderdiv.appendChild(noticeheaderimage);
    } else {
      notice.classList.add("unchecked-notice");
      let noticeheaderimage = document.createElement("img");
      noticeheaderimage.setAttribute(
        "src",
        "assets/icons/checkbox-unchecked.svg"
      );
      noticeheaderimage.setAttribute("alt", "a checkbox checked");
      noticeheaderdiv.appendChild(noticeheaderimage);
    }
    notice.appendChild(noticeheaderdiv);
    // noticeheaderdiv.appendChild(noticeheadercontent)
    // noticeheaderdiv.classList.add('notice-header-div')
    let noticecontent = document.createElement("div");
    noticecontent.classList.add("noticecontent-div");
    noticecontent.innerText = announcement[i].notice;
    notice.appendChild(noticecontent);
    if (announcement[i].isCourse) {
      let course = document.createElement("div");
      course.classList.add("course-div");
      course.innerText = `Course: ${announcement[i].Course} `;
      notice.appendChild(course);
    }
    let noticefooter = document.createElement("div");
    noticefooter.classList.add("noticefooter-div");
    if (announcement[i].isfileattached) {
      let noticefooterimage = document.createElement("img");
      noticefooterimage.setAttribute("src", "assets/icons/arrow-down.svg");
      noticefooterimage.setAttribute("alt", "an arrow down icon");
      noticefooter.appendChild(noticefooterimage);
      let noticefooterdiv = document.createElement("div");
      noticefooterdiv.classList.add("noticefooter-div1");
      noticefooterdiv.innerText = `${announcement[i].nooffiles} files are attached`;
      noticefooter.appendChild(noticefooterdiv);
    }
    let noticefooterdate = document.createElement("div");
    noticefooterdate.innerText = announcement[i].datetime;
    noticefooter.appendChild(noticefooterdate);

    notice.appendChild(noticefooter);
    notices.appendChild(notice);
  }
  let buttons = document.createElement("div");
  buttons.classList.add("buttons-div");
  let button1 = document.createElement("button");
  button1.innerText = `SHOW ALL `;
  buttons.appendChild(button1);
  let button2 = document.createElement("button");
  button2.innerText = `CREATE NEW `;
  buttons.appendChild(button2);
  notices.appendChild(buttons);
  announcementdiv?.appendChild(notices);
}
if (announcementdrop) {
    announcementdrop.addEventListener("mouseenter", function () {
    isDropdownVisible = true;
    populateAnnouncement(announcement);
    // menudiv.style.display = "none";
    announcementdiv.style.display = "block";
  });

  announcementdrop.addEventListener("mouseleave", function () {
    isDropdownVisible = false;
    setTimeout(function () {
      if (!isMouseInDropdown) {
        announcementdiv.style.display = "none";
      }
    }, 100);
  });

  announcementdiv.addEventListener("mouseenter", function () {
    isMouseInDropdown = true;
  });

  announcementdiv.addEventListener("mouseleave", function () {
    isMouseInDropdown = false;
    setTimeout(function () {
      if (!isDropdownVisible) {
        announcementdiv.style.display = "none";
      }
    }, 100);
  });
}
const changeContentAnnouncement = document.getElementById('hide-notification'); //Apply id on p tag below alert icon
const announcementicon = document.getElementById('announcement-icon-hover') as HTMLElement; // Apply id on alert tag

announcementicon.addEventListener('mouseover', ()=> {
  changeContentAnnouncement.style.visibility = 'hidden';
  announcementicon.style.filter = 'brightness(0%) invert(1)'
})

announcementicon.addEventListener('mouseout', () => {
  changeContentAnnouncement.style.visibility = 'visible';
  announcementicon.style.filter = 'none'
});

//populateAnnouncement(announcement);
//alert
const alert: {
  notice: string;
  iconenabled: boolean;
  isCourse: boolean;
  Course: string;
  datetime: string;
}[] = [
  {
    notice:
      "License for Introduction to Algebra has been assigned to your school",
    isCourse: false,
    Course: "",
    datetime: "15-Sep-2018 at 7:21 pm",
    iconenabled: false,
  },
  {
    notice: "Lesson 3 Practice Worksheet overdue for Amy Santiago",
    isCourse: true,
    Course: "Advance Mathematics",
    datetime: "15-Sep-2018 at 05:21 pm",
    iconenabled: true,
  },
  {
    notice: "23 new students created",
    isCourse: false,
    Course: "",
    datetime: "14-Sep-2018 at 01:21 pm",
    iconenabled: false,
  },
  {
    notice: "15 submissions ready for evaluation",
    isCourse: true,
    Course: "Basics of Algebra",
    datetime: "13-Sep-2018 at 01:15 pm",
    iconenabled: false,
  },
  {
    notice:
      "License for Basic Concepts in Geometry has been assigned to your...",
    isCourse: false,
    Course: "",
    datetime: "15-Sep-2018 at 7:21 pm",
    iconenabled: false,
  },
  {
    notice: "Lesson 3 Practice Worksheet overdue for Sam Diego",
    isCourse: true,
    Course: "Advanced Mathematics",
    datetime: "15-Sep-2018 at 7:21 pm",
    iconenabled: true,
  },
];
export function populateAlert(
  alert: {
    notice: string;
    isCourse: boolean;
    Course: string;
    datetime: string;
    iconenabled: boolean;
  }[]
) {
  const alerts = document.createElement("div");
  alerts.classList.add("alert-hover");
  console.log(alerts);
  for (let i = 0; i < alert.length; i++) {
    let notice = document.createElement("div");
    let noticeheaderdiv = document.createElement("div");
    noticeheaderdiv.classList.add("noticeheader-div");
    let noticeheader = document.createElement("div");
    noticeheader.innerText = `${alert[i].notice}`;
    // let noticeheadercontent=document.createElement('div')
    // noticeheadercontent.innerText=announcement[i].PA
    noticeheaderdiv.appendChild(noticeheader);
    if (alert[i].iconenabled) {
      notice.classList.add("checked-notice");
      let noticeheaderimage = document.createElement("img");
      noticeheaderimage.setAttribute(
        "src",
        "assets/icons/checkbox-checked.svg"
      );
      noticeheaderimage.setAttribute("alt", "a checkbox checked");
      noticeheaderdiv.appendChild(noticeheaderimage);
    } else {
      notice.classList.add("unchecked-notice");
      let noticeheaderimage = document.createElement("img");
      noticeheaderimage.setAttribute(
        "src",
        "assets/icons/checkbox-unchecked.svg"
      );
      noticeheaderimage.setAttribute("alt", "a checkbox checked");
      noticeheaderdiv.appendChild(noticeheaderimage);
    }
    notice.appendChild(noticeheaderdiv);
    // noticeheaderdiv.appendChild(noticeheadercontent)
    // noticeheaderdiv.classList.add('notice-header-div')

    if (alert[i].isCourse) {
      let course = document.createElement("div");
      course.classList.add("course-div");
      course.innerText = `Course: ${alert[i].Course} `;
      notice.appendChild(course);
    }
    let noticefooter = document.createElement("div");
    noticefooter.classList.add("noticefooter-div");

    let noticefooterdate = document.createElement("div");
    noticefooterdate.innerText = alert[i].datetime;
    noticefooter.appendChild(noticefooterdate);

    notice.appendChild(noticefooter);
    alerts.appendChild(notice);
  }
  let buttonalert = document.createElement("button");
  buttonalert.innerText = "SHOW ALL";
  buttonalert.classList.add("noticefooter-div");
  alerts.appendChild(buttonalert);
  alertdiv.appendChild(alerts);
}
if (alertdrop) {
    alertdrop.addEventListener("mouseenter", function () {
    isDropdownVisible = true;
    populateAlert(alert);
    alertdiv.style.display = "block";
  });

  alertdrop.addEventListener("mouseleave", function () {
    isDropdownVisible = false;
    setTimeout(function () {
      if (!isMouseInDropdown) {
        alertdiv.style.display = "none";
      }
    }, 200);
  });

  alertdiv.addEventListener("mouseenter", function () {
    isMouseInDropdown = true;
  });

  alertdiv.addEventListener("mouseleave", function () {
    isMouseInDropdown = false;
    setTimeout(function () {
      if (!isDropdownVisible) {
        alertdiv.style.display = "none";
      }
    }, 200);
  });
}
const changeContent = document.getElementById('hide-notif'); //Apply id on p tag below alert icon
const alerticon = document.getElementById('alert-icon-hover') as HTMLElement; // Apply id on alert tag

alerticon.addEventListener('mouseover', ()=> {
  changeContent.style.visibility = 'hidden';
  alerticon.style.filter = 'brightness(0%) invert(1)'
})

alerticon.addEventListener('mouseout', () => {
  changeContent.style.visibility = 'visible';
  alerticon.style.filter = 'none'
});

// alerticon.onclick = () => {
//   if (changeContent.style.visibility === 'visible') {
//     changeContent.style.visibility = 'hidden';
//   } else {
//     changeContent.style.visibility = 'visible';
//   }
// };
//populateAlert(alert);
// if (alertdrop) {
//   alertdrop.addEventListener("mouseenter", () => {
//     console.log("hi");
//     // Function to be called when the div is hovered
//     populateAlert(alert);
//   });
// }
//responsive
if(window.innerWidth<=868 && window.innerWidth>=828){
  window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var marginValue = 100 + (909 - width); // Adjust the calculation as per your requirements
    var container=document.querySelector('.alert-hover')
    if (container instanceof HTMLElement) {
      container.style.right = marginValue + 'px';
    }
  });
}
