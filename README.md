## The Universe Blog

![universe-blog-project (2)](https://github.com/Noroff-FEU-Assignments/project-exam-1-Krihag/assets/125972171/b41824ed-3f8e-40c5-a993-f02546d290b4)

This was our 1st year Project Exam. 

## Description

For the first year project exam our assignment was to create a blog site. We were free to choose the theme of the blog and the design of it ourself.

## Brief

You have been tasked with creating a blog site. You can choose the design and topics covered on the blog, but it should have at least the following pages:
-	Home page
-	About page
-	List of blog posts
-	Blog post specific pages
-	Contact page.

### Home Page
The home page should feature a 'Latest Posts' section, designed as a carousel (slider) for the desktop version. As an example, you could display four posts at a time, although you're welcome to adjust this number to better suit your design. Users should be able to click an arrow on the right to scroll through to the next set of posts, and an arrow on the left to view the previous set. For the mobile version, you are free to alter the layout as you deem appropriate, without being tied to a carousel format.

### Blog Page
The blog posts page should show the first 10 blogs, and the user should click to view more results which then show underneath the first 10 blogs.

### Blog Specific Page
The content of the blog specific page should be dynamically built using a query string parameter based on whatever link the user clicked. The title of the blog specific page should change based on the blog that has been clicked on e.g. “My Blog | An Article I Wrote”.

If images on the blog specific page are clicked, a modal should appear giving the user a bigger view of that image. Clicking outside the image should hide the modal.

### Contact page

Create a contact us page, there should be 4 textboxes on this page.
-	Name (Should be more than 5 characters long)
-	Email address (Must be a valid email address)
-	Subject (Should be more than 15 characters long)
-	Message content (Should be more than 25 characters long)

Please use JavaScript for validation, show error messages if the values in the textboxes do not meet the requirements.

### WordPress

The content for your website will be stored on a WordPress installation used as a Headless CMS. It’s important to note that we are only using WordPress to provide an API and add content for the blog. You should not submit a link to a WordPress site, but build your website using HTML, CSS and JavaScript and making a call to the WordPress REST API to fetch the data. 

The project has two aspects:
-	API from your WordPress installation
-	Your website built with HTML, CSS and JavaScript

You will need to add at least 12 blogs for your website. You can use lorem ipsum for paragraphs if you need, but headings, images etc. should all make sense.


## Built With
- HTML
- CSS
- Javascript
- Strapi 

## Getting Started

### Installing

This is where you list how to get the project started. It typically just includes telling a person to clone the repo and then to install the dependencies e.g.

1. Clone the repo:

```bash
git clone git@github.com:NoroffFEU/portfolio-1-example.git
```

2. Install the dependencies:

```
npm install
```

### Running

Here is where you detail how to run the app. It typically involves the commands you'd need to run to start the project e.g.

To run the app, run the following commands:

```bash
npm run start
```

## Contact

kristian.hageseter@gmail.com
