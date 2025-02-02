
const heading = React.createElement("h1",{id:"teststyle"},"Hello Good Morning !!!");

//Form Example - 1
// const form = React.createElement(
//   "form",
//   { 
//     id: "myForm",
//     onSubmit: (event) => {
//       event.preventDefault();
//       alert("Form submitted!");
//     }
//   },
//   React.createElement("label", { htmlFor: "name" }, "Name:"),
//   React.createElement("input", { 
//     type: "text", 
//     id: "name", 
//     name: "name", 
//     placeholder: "Enter your name" 
//   }),
//   React.createElement("br"),
//   React.createElement("label", { htmlFor: "email" }, "Email:"),
//   React.createElement("input", { 
//     type: "email", 
//     id: "email", 
//     name: "email", 
//     placeholder: "Enter your email" 
//   }),
//   React.createElement("br"),
//   React.createElement("input", { 
//     type: "submit", 
//     value: "Submit" 
//   })
// );

// // Render the form to the DOM
// //ReactDOM.render(form, document.getElementById('root'));

// console.log(form);

// const domroot = ReactDOM.createRoot(document.getElementById("root"));

// console.log(domroot);

// domroot.render(form);

//Form Example 2

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
    console.log("Form Data:", formObject);
    alert("Form submitted successfully!");
  };

  return React.createElement(
    "form",
    {
      id: "contactForm",
      onSubmit: handleSubmit,
    },
    React.createElement("label", { htmlFor: "name" }, "Name:"),
    React.createElement("input", {
      type: "text",
      id: "name",
      name: "name",
      placeholder: "Enter your name",
      required: true,
    }),
    React.createElement("br"),
    React.createElement("label", { htmlFor: "email" }, "Email:"),
    React.createElement("input", {
      type: "email",
      id: "email",
      name: "email",
      placeholder: "Enter your email",
      required: true,
    }),
    React.createElement("br"),
    React.createElement("label", { htmlFor: "subject" }, "Subject:"),
    React.createElement("input", {
      type: "text",
      id: "subject",
      name: "subject",
      placeholder: "Enter the subject",
      required: true,
    }),
    React.createElement("br"),
    React.createElement("label", { htmlFor: "message" }, "Message:"),
    React.createElement("textarea", {
      id: "message",
      name: "message",
      placeholder: "Enter your message",
      rows: "4",
      required: true,
    }),
    React.createElement("br"),
    React.createElement("input", {
      type: "submit",
      value: "Submit",
    })
  );
};

// Render the form to the DOM
const domRoot = ReactDOM.createRoot(document.getElementById("root"));

console.log(domRoot);

domRoot.render(React.createElement(ContactForm));

console.log(domRoot);

