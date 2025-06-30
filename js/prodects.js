// project-details.js

const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("id");

// Static Data
const projects = [
  {
    id: "1",
    title: "Shaqra Governate Building",
    location: "Shaqra, Saudi Arabia",
    label: "Area : 22,000 m | owner : Ministry Of interior",

    image: "../image/p1.png",
    image1: "../image/p1(1).JPG",
    description:
      "A government building project in Shaqra region with modern design and infrastructureThe Shaqra Governate Building for the Ministry of Interior is a modern and functional office complex designed to meet the needs of government officials and employees. Strategically located in the heart of Shaqra, the building serves as a hub for administrative activities, providing a range of office spaces and facilities for various departments and agencies.Our team had the privilege of working on the construction of this building project, bringing together expertise, innovative solutions, and meticulous attention to detail to deliver a high-quality facility. The building’s design is characterized by clean lines, minimalist aesthetic, and an emphasis on functionality, creating a professional and efficient working environment. The exterior façade is sleek and modern, with a combination of glass, steel, and concrete that provides a sense of solidity and permanence The building’s design is characterized by clean lines, minimalist aesthetic, and an emphasis on functionality, creating a professional and efficient working environment. The exterior façade is sleek and modern, with a combination of glass, steel, and concrete that provides a sense of solidity and permanence.Inside, the building features spacious offices, meeting rooms, and administrative areas, all equipped with state-of-the-art technology and amenities. The interior design is functional and comfortable, with an emphasis on creating a productive and efficient work environment.Overall, the Shaqra Governate Building is a testament to modern architecture and design, providing a functional and efficient workspace for government officials and employees. Its sleek and modern design makes it a prominent landmark in the city, while its functional layout and amenities make it an ideal location for administrative activities..",
  },

  {
    id: "3",
    title: "NARCISSUS HOTEL BUILDING",
    location: "Riyadh, Saudi Arabia",

    label: "",

    image: "../image/p4.png",
    image1: "../image/p4(1).JPG",

    description:
      "Our team is responsible for the construction of the Narcissus Hotel Building, providing a comprehensive range of services to ensure the project’s successful completion. We will manage the construction process from start to finish, working closely with the client to meet their needs and expectations. Our expertise and experience in construction will enable us to deliver a high-quality hotel building that meets requirements. We are committed to delivering exceptional results and aim to complete the project to the highest standards.Throughout the construction process, we will prioritize quality, safety, and efficiency. Our team will work diligently to ensure that every aspect of the project is completed to the client’s satisfaction. We are looking forward to seeing the finished product and are excited to play a role in bringing this project to life. The Narcissus Hotel Building is expected to be an impressive addition to the area, and we are honored to be a part of its construction.",
  },
  {
    id: "4",
    title: "DISTRIBUTION CONTROL CENTER BUILDING",
    location: "Riyadh, Saudi Arabia",

    label: "Area: 22,000m²",
    image: "../image/p5.png",
    image1: "../image/p5(1).JPG",
    description:
      "Our team employed a design-build approach, which allowed us to seamlessly integrate the design and construction phases of the project. This collaborative approach enabled us to deliver a state-of-the-art facility that meets the unique needs of distribution operations.The project scope was comprehensive and far-reaching, encompassing a wide range of activities that were carefully planned and executed to bring the vision of a Distribution Control Center Building to life. From the outset, our team provided comprehensive design services, working closely with stakeholders to develop a design that met the specific requirements of distribution operations.With the design in place, our team moved forward with construction, carefully executing each phase of the project to ensure that the building was constructed to the highest standards. This involved installing mechanical, electrical, and plumbing (MEP) systems, fire suppression, and security systems, all of which were carefully designed and installed to meet the building’s specific needs.The design-build approach allowed our team to work closely together to ensure that the building’s design and construction were fully integrated, resulting in a facility that is both functional and efficient. Our team completed interior and exterior finishes, including architectural, flooring, and ceiling systems, as well as windows, and doors, to create a durable, aesthetically-pleasing envelope that would protect the building from the elements..",
  },

  {
    id: "5",
    title: "HEALTH CARE CENTERS",
    location: "Madinah, Saudi Arabia",

    label: "Area: 2,870m²",
    image: "../image/p6.png",
    image1: "../image/p6(1).JPG",
    description:
      "This comprehensive healthcare center is a sprawling complex comprising 13 identical buildings, each designed to provide top-notch medical care and services to the community. As a general healthcare center, this facility offers a wide range of medical specialties and services, catering to the diverse needs of patients.Our company played a pivotal role in bringing this ambitious project to life, overseeing the construction of the entire complex. From foundation to completion, our team worked tirelessly to ensure that every aspect of the facility was carefully planned and executed to meet the highest standards of quality and functionality.The result is a modern and well-equipped healthcare center that provides a comfortable and efficient environment for patients to receive medical attention. With its 13 identical buildings, the complex presents a sense of unity and cohesion, reflecting the patient-focused approach to healthcare that it embodies. Our company’s expertise and dedication to delivering exceptional construction services have helped create a vital resource for the community, one that will serve the healthcare needs of generations to come.",
  },
  {
    id: "6",
    title: "SCIENCE & LITERATURE SCHOOL",
    location: "Riyadh, Saudi Arabia",

    label: "Area: 2,870m²",
    image: "../image/p7.png",
    image1: "../image/p7(1).JPG",
    description:
      "The scope of work included design and build services, from conceptualization to construction to project turnover of a school project in Riyadh, KSA. Our team designed an enclosed space prioritizing security and privacy, with a beautifully landscaped central courtyard serving as the focal point. The courtyard provides indirect sunlight to classrooms, creating a comfortable learning environment. The school features administration spaces, laboratories, a library, and audio-visual rooms, providing students with a comprehensive and well-equipped learning environment.Our team managed every stage of the project, from initial design to final handover, ensuring that the school met the highest standards of quality, functionality, and safety. The result is a modern and secure facility that provides students with an ideal environment for learning and growth. The successful completion of this project is a testament to the team’s expertise and dedication to delivering high-quality educational facilities. We are proud to have played a role in creating a learning environment that will support the educational journey of students in Riyadh, KSA. The school’s modern design, with its strong focus on security and functionality, makes it an ideal place for students to learn and grow.",
  },
  {
    id: "7",
    title: "BUSINESS CENTRAL TOWER",
    location: "Dubai, United Arab Emirates",

    label:
      "* Residential building, Basement + Ground floor + 19 floors | Owner: Damac Star Properties",
    image: "../image/p2.png",
    image1: "../image/p2.png",
    description:
      "In a collaborative effort, a strategic joint venture was established with Modern Building Contracting Company (MBCC LLC) to spearhead the Business Central Tower project. This joint venture delivered end-to-end construction services, including site preparation, infrastructure development, system installations, and fulfillment of architectural and engineering specifications, all while prioritizing timely completion and stringent quality control.",
  },
  {
    id: "8",
    title: "LAIYA PLAZA HOTEL",
    location: "Dubai, United Arab Emirates",

    label:
      "* Al Qusais, plot 233-0137, Dubai Basement + Ground floor + 4 floors | Owner: M/s. Investment Group (pvt) ltd",
    image: "../image/p3(1).png",
    image1: "../image/p3(3).png.jpg",
    description:
      "The Laiya Plaza Hotel project was the result of a successful strategic joint venture with Modern Building Contracting Company (MBCC LLC). Through this partnership, we managed all facets of the construction process, working diligently to ensure the project was completed within schedule and adhered to rigorous quality benchmarks. The outcome was a truly exceptional hotel, designed to provide a serene and unforgettable experience for its guests. With its unique blend of elegance and comfort, the hotel has become a haven for those seeking relaxation and luxury",
  },
  {
    id: "9",
    title: "ABDULKARIM PRIVATE VILLA",
    location: "Riyadh, Saudi Arabia",

    label: "Area: 300.00m²",
    image: "../image/p13.JPG",
    image1: "../image/p1.JPG",
    description:
      "The scope of work for this project included comprehensive design and build services, encompassing the entire project lifecycle from conceptualization to construction and ultimately, project turnover of the private villa. Our team was responsible for bringing this luxurious residence to life, carefully crafting every detail to create a truly exceptional living space.The exterior of the villa is a masterclass in minimalist design, characterized by clean lines, simple shapes, and a notable lack of clutter. This thoughtful approach gives the home a sense of calm and serenity, while simultaneously making it feel modern. One single window, strategically positioned near the corner, adds a touch of subtlety to the design while maintaining the overall minimalist ethos.Throughout the project, our team worked tirelessly to ensure that every aspect of the villa’s design and construction met the highest standards of quality and craftsmanship. From the initial design phase to the final stages of construction, the villa was developed through a highly collaborative process that addressed the client’s expectations. The villa’s clean lines helped to create a carefully considered interior layout, designed to create a sense of calm and tranquility; providing the perfect home for those seeking a peaceful living environment. Our commitment to delivering high-quality execution and seamless project delivery ensured a successful handover to the client, who can now enjoy their beautiful new home.",
  },
  {
    id: "10",
    title: "AL GHONAIM PRIVATE VILLA",
    location: "Riyadh, Saudi Arabia",

    label: "Area: 750.00m²",
    image: "../image/p14.JPG",
    image1: "../image/p14(2).JPG",
    description:
      "The scope of work included design and build services, from conceptualization to construction and project turnover of the private villa. The tropical modern architectural style blends contemporary design with nature, incorporating organic materials like wood and natural stones.One of the villa’s most striking features is the pool area, which is accessible from the common areas via sliding glass doors. This thoughtful design element creates an indoor-outdoor charm, allowing the villa’s occupants to effortlessly transition between the interior and exterior spaces. The pool area is a perfect spot to relax and unwind, surrounded by the soothing sounds of nature and the warmth of the sun",
  },
  {
    id: "11",
    title: "DIRIYAH PRIVATE VILLA",
    location: "Riyadh, Saudi Arabia",

    label: "Area: 660.00m²",
    image: "../image/p12.png",
    image1: "../image/p12.png",
    description:
      "The scope of work for this project included design and build services, from conceptualization to construction and ongoing construction of the private villa. This luxurious residence features a stunning central courtyard, expertly blending architecture and nature to create a harmonious living space. The courtyard serves as the focal point, providing a sense of tranquility and connection to the outdoors.The façade is designed in the Salmani Architectural style, skillfully combining modernity and luxury while paying homage to Saudi Arabia’s original heritage and identity. This unique style creates a touch of elegance and sophistication, reflecting the cultural heritage of Saudi Arabia. The villa’s design is a masterful blend of traditional and modern elements, creating a unique and luxurious living space. From the initial design phase to ongoing construction, our team has been dedicated to delivering a prestigious private villa that fully exceeds the client’s expectations. The result is a luxurious residence that seamlessly blends traditional Saudi architecture with modern luxuries, ensuring a comfortable and unforgettable experience.As the project continues to take shape, our team remains committed to ensuring that every detail meets the highest standards of quality and craftsmanship. We are excited to see the final product and know that the client will be thrilled with their new home, which will serve as a shining example of the value and elegance of Salmani architecture. With its unique blend of traditional and modern elements, this private villa is sure to be a standout in the world of luxury residences.",
  },
  {
    id: "12",
    title: "AL QARNI PRIVATE VILLAS",
    location: "Riyadh, Saudi Arabia",

    label: "Area: 900.00m²",
    image: "../image/p11.png",
    image1: "../image/p11.png",
    description:
      "The scope of work for this project included design and build services, from conceptualization to construction to project turnover of two 3-storey private villas. Our team was responsible for bringing these luxurious residences to life, incorporating contemporary design elements with modern materials and techniques.The villas’ design is characterized by clean lines, minimalist aesthetic, and an emphasis on functionality, creating a unique and luxurious living space. The 3-storey design provides ample space for the clients to live comfortably, with each floor carefully planned to meet their needs and preferences.From conceptualization to project turnover, our team managed every aspect of the design and construction process, ensuring that every detail met the highest standards of quality and craftsmanship. The result is two stunning private villas that showcase contemporary design elements, thorough layouts, and comfortable living spaces for their occupants. Throughout the project, our team worked tirelessly to ensure that every aspect of the villas’ design and construction met the clients’ expectations. From the initial design phase to the final stages of construction, our team was dedicated to delivering two exceptionally private villas that exceeded the clients’ vision.",
  },
  {
    id: "13",
    title: "AL AUDDHA PRIVATE VILLA",
    location: "Riyadh, Saudi Arabia",

    label: "Area: 345.00m²",
    image: "../image/p10.png",
    image1: "../image/p10(1).JPG",
    description:
      "This project encompasses a full scope of work, ranging from initial conceptualization and design to the complete construction and delivery of a luxury private villa. Our team is responsible for bringing this elegant residence to life, overseeing every stage from design development to the final phases of construction.Currently under construction, the villa is being built through a collaborative process where our team works diligently to realize the client’s vision. We are dedicated to delivering a premium, high-quality product that not only meets but exceeds client expectations. With a deep understanding of construction and design, our team effectively navigates the challenges of creating a complex, free-form structure. We look forward to unveiling the finished masterpiece.As progress continues, our focus remains on maintaining excellence in both design and execution. By working closely with the client, we ensure that their vision and requirements are fully realized. Each stage of the process reflects our commitment to craftsmanship and innovation. The finished villa will stand as a refined representation of our client’s aspirations—an architectural work of art that seamlessly blends beauty and functionality. It will embody a luxurious lifestyle, highlighting the best in modern architecture and design.",
  },
  {
    id: "14",
    title: "AL SULAMI PRIVATE VILLA",
    location: "Riyadh, Saudi Arabia",

    label: "Area: 400.00m²",
    image: "../image/p8(1).png",
    image1: "../image/p8(2).png",
    description:
      "The scope includes:•	Structural work: foundation, walls, and roofing•	Installation of electrical, plumbing, and HVAC systems•	Finishing work: flooring, walls, ceilings, and roofing•	Installation of fixtures and appliances Our team ensured each villa meets the highest standards of construction and design, resulting in a stunning private villa that exceeds the client’s expectations. Located in Riyadh, these villas provide a luxurious and comfortable living space, tailored to the client’s needs and preferences.With a focus on quality, craftsmanship, and attention to detail, our team has successfully delivered a range of private villas that showcase the best of modern living in Riyadh. From the structural construction through to the final touches, our team has worked tirelessly to ensure that every villa is a masterpiece of design and functionality, providing a truly exceptional living experience for our clients.",
  },
  {
    id: "15",
    title: "private villas ",
    location: "Riyadh, Saudi Arabia",

    label: "Area: 900.00m²",
    image: "../image/p9.png",
    image1: "../image/p9(1).JPG",
    description:
      "The scope of work for this project included design and build services, from conceptualization to construction to project turnover of two 3-storey private villas. Our team was responsible for bringing these luxurious residences to life, incorporating contemporary design elements with modern materials and techniques.The villas’ design is characterized by clean lines, minimalist aesthetic, and an emphasis on functionality, creating a unique and luxurious living space. The 3-storey design provides ample space for the clients to live comfortably, with each floor carefully planned to meet their needs and preferences.From conceptualization to project turnover, our team managed every aspect of the design and construction process, ensuring that every detail met the highest standards of quality and craftsmanship. The result is two stunning private villas that showcase contemporary design elements, thorough layouts, and comfortable living spaces for their occupants. Throughout the project, our team worked tirelessly to ensure that every aspect of the villas’ design and construction met the clients’ expectations. From the initial design phase to the final stages of construction, our team was dedicated to delivering two exceptionally private villas that exceeded the clients’ vision.",
  },
];

const project = projects.find((p) => p.id === projectId);

if (project) {
  document.getElementById("projectTitle").textContent = project.title;
  document.getElementById("projectLocation").textContent = project.location;
  document.getElementById("projectLabel").textContent = project.label;
  document.getElementById("projectImage").src = project.image;
  document.getElementById("projectImage").alt = project.title;
  document.getElementById("projectImage1").src = project.image1;
  document.getElementById("projectImage1").alt = project.title;
  document.getElementById("projectDescription").textContent =
    project.description;
} else {
  document.body.innerHTML =
    "<h2 class='text-center text-danger'>Project not found.</h2>";
}
