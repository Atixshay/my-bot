const { ActivityType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
  
        const activities = [
            { name: 'ENCORINS', type: ActivityType.Watching },
            { name: 'ON PS5', type: ActivityType.Playing },
            { name: 'on DISCORD', type: ActivityType.Streaming },
            { name: 'ENCORINS', type: ActivityType.Listening },
        ];

     
        const statuses = ['idle'];

     
        let currentActivityIndex = 0;
        let currentStatusIndex = 0;

 
        function setActivityAndStatus() {
        
            const activity = activities[currentActivityIndex];
            const status = statuses[currentStatusIndex];

          
            client.user.setPresence({
                activities: [activity],
                status: status,
            });

            
            currentActivityIndex = (currentActivityIndex + 1) % activities.length;
            currentStatusIndex = (currentStatusIndex + 1) % statuses.length;
        }

        
        setTimeout(() => {
            setActivityAndStatus();
            console.log('\x1b[31m[ CORE ]\x1b[0m \x1b[32m%s\x1b[0m', 'Bot Activity Set Successful ✅');
        }, 2000);

        setInterval(() => {
            setActivityAndStatus();
        }, 6000);
    },
};
