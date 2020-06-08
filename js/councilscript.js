class Profile {
  constructor(profile_name, profile_job, profile_description, profile_email, profile_color, profile_image) {
    this.profile_name = profile_name;
    this.profile_job = profile_job;
    this.profile_description = profile_description;
    this.profile_email = profile_email;
    this.profile_color = profile_color;
    // this.image = document.querySelector("#avatar").innerHTML;
    this.image = profile_image;
  }

  create() {
    let profile_block = document.createElement("div");
    profile_block.setAttribute("class", "profile-card");

    let profile_card_image = document.createElement("img");
    profile_card_image.setAttribute("class", "profile-card-image");
    profile_card_image.src = this.image;
    profile_card_image.style.backgroundColor = this.profile_color;

    let profile_card_desc = document.createElement("div");
    profile_card_desc.setAttribute("class", "profile-card-description");

    let profile_card_elements = document.createElement("div");
    profile_card_elements.setAttribute("class", "profile-card-description-elements");

    let profileTitle = document.createElement("h2");
    profileTitle.innerHTML = this.profile_name;
    let profileJob = document.createElement("label");
    profileJob.innerHTML = this.profile_job;
    let profileDesc = document.createElement("p");
    profileDesc.innerHTML = this.profile_description;
    let profileEmail = document.createElement("a");
    profileEmail.href= "mailto:"+this.profile_email;
    profileEmail.innerHTML = this.profile_email;

    profile_card_elements.appendChild(profileTitle);
    profile_card_elements.appendChild(profileJob);
    profile_card_elements.appendChild(document.createElement("hr"));
    profile_card_elements.appendChild(profileDesc);
    profile_card_elements.appendChild(profileEmail);

    profile_card_desc.appendChild(profile_card_elements);
    
    // let profile_job_title_outer = document.createElement("p");
    // profile_job_title_outer.innerHTML =  this.profile_job;

    profile_block.appendChild(profile_card_image);
    // profile_block.appendChild(profile_job_title_outer);
    profile_block.appendChild(profile_card_desc);

    this.addElementToMain(profile_block);
  }

  addElementToMain(element) {
    document.querySelector("#main").appendChild(element);
  }

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

var p1 = new Profile(
  "Priyanka Jacob",
  "President",
  "She is the president",
  "priyankaj16e@iiitt.ac.in",
  "var(--main-blue-color)",
  "images/student_council/daksh.webp"
);
p1.create();

var p2 = new Profile(
  "Sairam",
  "Vice President",
  "He is the vice president",
  "sairam16e@iiitt.ac.in",
  "var(--main-white-color)",
  "images/student_council/daksh.webp"
);
p2.create();

var p3 = new Profile(
  "Hitesh Daksh",
  "Administrative Representative",
  "Got a problem with admin..contact this guy",
  "hiteshd17c@iiitt.ac.in",
  "var(--main-red-color)",
  "images/student_council/daksh.webp"
);
p3.create();

var p4 = new Profile(
    "Abhishek Singhal",
    "Technical Representative",
    "This guy will solve any technical problems related to the institute",
    "abhisheks17c@iiitt.ac.in",
    "var(--main-red-color)",
    "images/student_council/abhi.webp"
  );
  p4.create();

var p5 = new Profile(
    "Vadisa Yamini",
    "Cultural Representative",
    "Any issues related to cultural development...she is there",
    "vadisay17e@iiitt.ac.in",
    "var(--main-red-color)",
    "images/student_council/abhi.webp"
  );
  p5.create();

  var p6 = new Profile(
    "Sai Teja",
    "Sports Representative",
    "Wanna play a game...contact this guy",
    "megawaths17c@iiitt.ac.in",
    "var(--main-red-color)",
    "images/student_council/abhi.webp"
  );
  p6.create();