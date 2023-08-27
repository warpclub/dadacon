
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
 
const steps = [
    {
        id: '1',
        message: 'Hello! What is your name?',

        // This calls the next id
        // i.e. id 1 in this case
        trigger: '2',
    }, {
        id: '2',
 
        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        // message:'Please select your issue',
        options: [
            // When we need to show a number of
            // options to choose we create alist
            // like this
            
            { value: 1, label: 'Missplaced Order' , trigger: '5'},
            { value: 2, label: "Didn't like the food" ,trigger: '6'},
            { value: 3, label: "Other..." ,trigger: '7'},
 
        ],
       
    },{
        id:'5',
        message: 'Please contact our manager at 9999403121',
        trigger: 8

    },
    {
        id:'6',
        message: 'Sorry to hear that! Use code SECONDCHANCE in your next order for 30% discount.',
        trigger: 8
    },
    {
        id:'7',
        user:true,
        validator: (value) => {
            if (value==='BirdIsTheWord') {
              window.location.href='/dada';
            }
            return true;
        },
        trigger: 8
    },
    {
        id: '8',
        message: 'Thank you for using our services, have a nice day!',

        end: true
    }
];
 
// Creating our own theme
const theme = {
    background: '#f0d7a7',
    headerBgColor: '#894e3f',
    headerFontSize: '20px',
    botBubbleColor: ' #E4AC4F',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};
 
// Set some properties of the bot
const config = {
    botAvatar: "/Bot.jpg",
    floating: true,
};
 
function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="Ronald the Helper"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
        </div>
    );
}
 
export default App;