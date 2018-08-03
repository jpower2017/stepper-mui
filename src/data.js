const subForms1 = [
  {
    name: "subform",
    title: "Legal name",
    fields: [
      { name: "FirstName", title: "First name", required: true },
      { name: "txtMiddleInitial", title: "Middle initial" },
      { name: "LastName", title: "Last name", required: true }
    ]
  },
  {
    name: "subform",
    title: "Home address",
    fields: [
      { name: "txtStreet", title: "Street" },
      { name: "txtApt", title: "Apt or suite" },
      { name: "txtCity", title: "City" },
      {
        name: "ddlState",
        title: "State",
        required: true,
        uiType: "dd",
        uiOptions: [
          { name: "", title: "Select state", value: "" },
          { name: "ca", title: "California", value: "1" },
          { name: "co", title: "Colorado", value: "2" },
          { name: "fl", title: "Florida", value: "3" },
          { name: "ny", title: "New York", value: "4" },
          { name: "tx", title: "Texas", value: "5" }
        ]
      },
      { name: "txtZip", title: "Zip code", type: "zipCode" }
    ]
  },
  {
    name: "subform",
    title: "Personal contact information",
    fields: [
      {
        name: "txtPersonalEmailAddress",
        title: "Personal email",
        type: "email"
      },
      { name: "txtPersonalMobilePhone", title: "Mobile phone", type: "phone" },
      { name: "txtHomePhone", title: "Home phone", type: "phone" },
      { name: "txtSSN", title: "SSN", type: "ssn", required: true },
      {
        name: "dtDateOfBirth",
        title: "Date of birth",
        type: "date",
        required: true
      },
      {
        name: "ddlGender",
        title: "Gender",
        type: "gender",
        uiType: "dd",
        uiOptions: [
          { name: "", title: "Select gender", value: "" },
          { name: "male", title: "Male", value: "male" },
          { name: "female", title: "Female", value: "female" }
        ]
      },
      {
        name: "ddlEthnicity",
        title: "Ethnicity",
        type: "ethnicity",
        uiType: "dd",
        uiOptions: [
          { name: "", title: "Select ethnicity", value: "" },
          { name: "hispanic", title: "Hispanic or Latino", value: "1" },
          {
            name: "white",
            title: "White (not Hispanic or Latino)",
            value: "2"
          },
          {
            name: "black",
            title: "Black or African-American (not Hispanic or Latino)",
            value: "3"
          },
          {
            name: "nativeHawaiian",
            title:
              "Native Hawaiian or other Pacific Islander (not Hispanic or Latino)",
            value: "4"
          },
          {
            name: "americanIndian",
            title: "American Indian or Alaskan Native (not Hispanic or Latino)",
            value: "5"
          },
          {
            name: "twoRaces",
            title: "Two or more races (not Hispanic or Latino)",
            value: "6"
          },
          { name: "noAnswer", title: "Choose not to answer", value: "0" }
        ]
      }
    ]
  }
];
const subForms2 = [
  {
    name: "subform",
    title: "",
    fields: [
      {
        name: "ddlLegalEntity",
        title: "Legal entity",
        type: "legalEntity",
        uiType: "dd",
        uiOptions: [
          { name: "", title: "Select legal entity", value: "" },
          { name: "bscc", title: "Blue Spruce Capital Corp.", value: "1" },
          { name: "bse", title: "Bluespruce Employment LLC", value: "2" },
          { name: "midland", title: "BSCC Midland Manager LLC", value: "3" },
          { name: "triptyk", title: "Triptyk Studios LLC", value: "4" }
        ]
      },
      {
        name: "ddlDivision",
        title: "Division",
        type: "division",
        uiType: "dd",
        uiOptions: [
          { name: "", title: "Select division", value: "" },
          {
            name: "householdOps",
            title: "Household operations & person assistants ",
            value: "1"
          },
          { name: "flightOps", title: "Flight operations", value: "2" },
          {
            name: "investmentOps",
            title: "Investment operations including JDM",
            value: "3"
          },
          {
            name: "secondGen",
            title: "Second generation including Triptyk",
            value: "4"
          },
          {
            name: "financeAndIT",
            title: "Finance and IT operations",
            value: "5"
          }
        ]
      },
      {
        name: "ddlDepartment",
        title: "Department",
        type: "department",
        uiType: "dd",
        uiOptions: [
          { name: "", title: "Select department", value: "" },
          {
            name: "investmentOps",
            title: "Investment Operations & Reporting",
            value: "1"
          },
          {
            name: "it",
            title: "Information Technology and Security",
            value: "2"
          },
          {
            name: "fiancial",
            title: "Financial Planning Reporting & Taxation",
            value: "3"
          },
          {
            name: "concierge",
            title: "Concierge & Personal Assistance",
            value: "4"
          },
          {
            name: "exOfficeBroomfield",
            title: "Executive Office - Broomfield",
            value: "5"
          },
          { name: "aviation", title: "Aviation Insurance & G2", value: "6" },
          { name: "hr", title: "Human Resources", value: "7" },
          {
            name: "taxation",
            title: "Taxation & Financial Planning",
            value: "8"
          },
          { name: "householdOps", title: "Household Operations", value: "9" },
          { name: "investments", title: "Investments", value: "10" },
          {
            name: "exOfficeHouston",
            title: "Executive Office - Houston",
            value: "11"
          },
          { name: "midland", title: "Joy Drive Midland LLC", value: "12" }
        ]
      },
      {
        name: "ddlPrimaryWorkLocation",
        title: "Work location",
        type: "workLocation",
        uiType: "dd",
        uiOptions: [
          { name: "", title: "Select work location", value: "" },
          { name: "malibu", title: "Malibu", value: "1" },
          { name: "yacht", title: "Yacht", value: "2" },
          { name: "moreno", title: "Moreno", value: "3" },
          { name: "corsica", title: "Corsica", value: "4" },
          { name: "hyannis", title: "Hyannis", value: "5" },
          { name: "west250", title: "250 West", value: "6" },
          { name: "triptyk", title: "Triptyk Studios", value: "7" },
          { name: "sanVicente", title: "San Vicente Blvd", value: "8" },
          { name: "daviesDr", title: "Davies Drive", value: "9" },
          { name: "gozzer", title: "Gozzer Ranch", value: "10" },
          { name: "surfside", title: "Surfside", value: "11" },
          {
            name: "fisherIsland",
            title: "Fisher Island/Marina Village",
            value: "12"
          },
          { name: "lilyPond", title: "Lily Pond Lane", value: "13" },
          {
            name: "houstonHangar",
            title: "Houston Flight Hangar",
            value: "14"
          },
          {
            name: "houstonInvOffice",
            title: "Houston Investment Office",
            value: "15"
          },
          { name: "broomfieldOffice", title: "Broomfield Office", value: "16" },
          { name: "remote", title: "Remote/Home Office", value: "17" }
        ]
      },
      {
        name: "ddlSupervisor",
        title: "Supervisor",
        uiType: "dd",
        uiOptions: [
          { name: "", title: "Select supervisor", value: "" },
          { name: "thorn", title: "Andrea Thorn", value: 1 },
          { name: "sheridan", title: "Cathy Sheridan", value: 2 },
          { name: "gloude", title: "Dale Gloude", value: 3 },
          { name: "wilkos", title: "Darrick Wilkos", value: 4 },
          { name: "lloyd", title: "David Lloyd", value: 5 },
          { name: "arnold", title: "Emily Arnold", value: 6 },
          { name: "williams", title: "Grant Williams", value: 7 },
          { name: "cuevas", title: "Lee Cuevas", value: 8 },
          { name: "saunders", title: "Rod Saunders", value: 9 },
          { name: "shockling", title: "Tina Shockling", value: 10 }
        ]
      }
    ]
  },

  {
    name: "subform",
    title: "Employment structure",
    fields: [
      {
        name: "ddlEmploymentType",
        title: "Employment type",
        uiType: "dd",
        uiOptions: [
          { name: "", title: "Select employment type", value: "" },
          { name: "one", title: "TriNet Co-employee payroll", value: 1 },
          {
            name: "two",
            title: "Independent contractor/consultant/vendor",
            value: 2
          }
        ]
      },
      {
        name: "ddlFullOrPartTime",
        title: "Full or part time",
        uiType: "dd",
        uiOptions: [
          { name: "", title: "Select full or part time", value: "" },
          { name: "one", title: "Full time", value: 1 },
          {
            name: "two",
            title: "Part time",
            value: 2
          }
        ]
      },
      {
        name: "ddlHourlyOrSalary",
        title: "Hourly or salary",
        uiType: "dd",
        uiOptions: [
          { name: "", title: "Select hourly or salary", value: "" },
          { name: "one", title: "Hourly", value: 1 },
          {
            name: "two",
            title: "Salary",
            value: 2
          }
        ]
      },
      {
        name: "ddlHoursPerWeek",
        title: "Hours per week",
        uiType: "dd",
        uiOptions: [
          { name: "", title: "Select hours per week", value: "" },
          { name: "one", title: "0-30", value: 1 },
          {
            name: "two",
            title: "30-40",
            value: 2
          },
          {
            name: "three",
            title: "40+",
            value: 3
          }
        ]
      },
      {
        name: "ddlFlsaStatus",
        title: "FLSA status",
        uiType: "dd",
        uiOptions: [
          { name: "", title: "Select exempt", value: "" },
          { name: "one", title: "Exempt", value: 1 },
          {
            name: "two",
            title: "Non-exempt",
            value: 2
          }
        ]
      },
      { name: "txtCompensationRange", title: "Compensation range" }
    ]
  }
];
const subForms3 = [
  {
    name: "subform",
    title: "",
    fields: [
      {
        name: "dtDateOfHire",
        title: "Date of hire",
        type: "date",
        required: true
      },
      { name: "txtJobTitle", title: "Job title", required: true },

      {
        name: "txtPTOHoursPerYear",
        title: "PTO hours per year",
        type: "number"
      },
      {
        name: "dtOfferExpirationDate",
        title: "Offer expiration date",
        type: "date"
      },
      {
        name: "ddlIsManager",
        title: "Is a manager",
        uiType: "dd",
        uiOptions: [
          { name: "", title: "Select: is a manager", value: "" },
          { name: "one", title: "Yes", value: 1 },
          {
            name: "two",
            title: "No",
            value: 2
          }
        ]
      },
      {
        name: "ddlCandidateViaAgency",
        title: "Candidate found via agency",
        uiType: "dd",
        uiOptions: [
          { name: "", title: "Select candidate agency", value: "" },
          { name: "one", title: "Yes", value: 1 },
          {
            name: "two",
            title: "No",
            value: 2
          }
        ]
      }
    ]
  },
  {
    name: "subform",
    title: "Preferred name",
    fields: [
      { name: "txtFirstNamePreferred", title: "First lastName" },
      { name: "txtMiddleInitialPreferred", title: "Middle initial" },
      { name: "txtLastNamePreferred", title: "Last name" }
    ]
  },
  {
    name: "subform",
    title: "Financial",
    fields: [
      {
        name: "txtFinalCompensation",
        title: "Final compensation",
        type: "currency"
      },
      { name: "txtBonusPotential", title: "Bonus potential", type: "currency" },
      { name: "txtSigningBonus", title: "Signing bonus", type: "currency" }
    ]
  }
];
export const forms = [
  { title: "Employee information", form: subForms1 },
  { title: "Position information", form: subForms2 },
  { title: "Offer letter request", form: subForms3 }
];
