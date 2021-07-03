# react-mycroft-gui

The React-Mycroft-Gui is an out-of-the-box solution for a GUI using the Mycroft open-source assistant.

While it works without configuration, it's easily extensible, and can be used with any Mycroft skill that outputs messages on the gui message bus.

Simply clone, install dependencies with 'npm install', and run with 'npm start'

To test, run Mycroft and ask something like:
"Wiki {query}"

# Adding your own interfaces

All skills in the React-Mycroft-Gui are referenced from the `skill_component_handler.jsx`,
<br> which resides in `src < components < mycroft_messagebus_elements`. <br>
Here you can add a conditional that triggers when your desired skill runs, <br>
This file then references skill components in the `src < components < skill_components` directory, where all skill related assets and components are kept.

To make your own skills you can either build the components from scratch, or otherwise use prebuilt functional components in the `src < components < skill_components` directory. <br>
These functional components utilize a state hook in the `mycroft_message_bus.jsx` that reset state if a page focus event happens, important for updating a component after render.
If you do choose to make your own components from scratch, it's important to keep these event's in mind and make sure they are handled accordingly if they occur.

---

Big Shoutout to forslund at mycroft, his ideas on making a js gui solution were the basis of this project.
