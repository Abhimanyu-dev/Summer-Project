## Summer Project - Next.js Mail Client

A Next.js-powered frontend for a mail client, demonstrating efficient handling of large datasets, dynamic routing, and rich text editing.

**Getting Started**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Abhimanyu-dev/Summer-Project.git
    ```

2. **Install Dependencies**
    ```bash
    cd "Summer-Project"
    npm install
    ```
3. **Start the development server**
    ```bash
    npm run dev
    #or
    yarn dev
    ```
4. **View the project:**
    Open [http://localhost:3000/](http://localhost:3000/)


**Key Features**
* **Efficient Data Handling:** Smoothly displays and updates large quantities of email data using react-intersection-observer.
* **Dynamic Routing:** Next.js dynamic routing for:
    * **Inbox:** http://localhost:3000/
    * **View Mail:** http://localhost:3000/mail/[id]
    * **Compose:** http://localhost:3000/mail/compose
* **Rich Teext Editing:** Draft.js based rich texxt editor for composing emails
* **Tailwind CSS:** Styling for clean and modern visual design
* **Framer Motion** Smooth animations using framer-motion library.

**Notes**
* Currently utilizes dummy data from [utils/database.json](utils/database.json)
* Some rich text editor functionalities are still under development
* Link to site: [https://summer-project-navy.vercel.app/](https://summer-project-navy.vercel.app/) 
    * The site uses text area html element instead of the rich text editor due to an issue during building. To see the rich text editor follow the preceding steps.