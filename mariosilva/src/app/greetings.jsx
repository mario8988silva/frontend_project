export const getGreetings = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const totalMins = hours * 60 + minutes;

    if (totalMins >= 60 && totalMins < 299) {
        return "Well Hello, Night Owl...";

    } else if (totalMins >= 300 && totalMins < 719) {
        return "Good Morning!";

    } else if (totalMins >= 720 && totalMins < 839) {
        return "Lunch Break? Bon Appétit!";

    } else if (totalMins >= 840 && totalMins < 1079) {
        return "Good Afternoon!";

    } else if (totalMins >= 1080 && totalMins < 1199) {
        return "Hope You Had a Nice Day";

    } else if ((totalMins >= 1200 && totalMins < 1440) || (totalMins >= 0 && totalMins < 59)) {
        return "Have a Good Night...";

    } else {
        return "Hello!";
    }
};

