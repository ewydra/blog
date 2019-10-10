const initialState = [
  { 
    id: 1,
    title: 'Article one',
    date: 'December 17, 2018 15:23:00',
    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt suscipit dui, non auctor metus tincidunt sed.',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu sollicitudin libero, vitae lacinia orci. Maecenas sed egestas ipsum. Duis euismod tincidunt pretium. Cras consequat risus id fermentum elementum. Nullam a lorem sed risus hendrerit rhoncus. Proin lacus lectus, ultrices gravida venenatis nec, eleifend quis erat. Donec et blandit nunc. Donec id ultricies eros, sed pretium velit. Etiam augue mi, posuere et facilisis auctor, placerat eget turpis. Suspendisse augue nisl, ultricies sit amet nisl ut, tempus sodales lorem. Vivamus non tincidunt metus. Integer lectus sapien, laoreet ut placerat ut, aliquam et purus. Integer in semper mi. Nunc tempor eget urna a laoreet.

    Phasellus a dapibus enim. Nam malesuada ex a massa convallis mattis. Etiam volutpat lacus vitae odio molestie, eget interdum orci venenatis. Ut non placerat diam, nec blandit nibh. Vestibulum ut sapien sed orci ornare commodo. Nam id neque in dui tristique venenatis ac sed lorem. Nulla aliquam turpis id lorem molestie egestas. Etiam semper sodales libero, sed varius ante. Phasellus mollis euismod est vel gravida. Cras bibendum neque eget odio laoreet, ac feugiat quam egestas. Maecenas feugiat erat facilisis lacus ornare dictum. Aliquam quis porttitor enim. Nunc quis consequat elit. Donec pellentesque, purus eu varius condimentum, enim enim vestibulum erat, ut scelerisque dolor nulla et mi. Praesent tincidunt ante vitae neque fermentum pulvinar. Maecenas fermentum placerat consectetur.`
  },
  { 
    id: 2,
    title: 'Article two',
    date: 'December 20, 2018 17:31:00',
    abstract: 'Phasellus a dapibus enim. Nam malesuada ex a massa convallis mattis. Etiam volutpat lacus vitae odio molestie, eget interdum orci venenatis.',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu sollicitudin libero, vitae lacinia orci. Maecenas sed egestas ipsum. Duis euismod tincidunt pretium. Cras consequat risus id fermentum elementum. Nullam a lorem sed risus hendrerit rhoncus. Proin lacus lectus, ultrices gravida venenatis nec, eleifend quis erat. Donec et blandit nunc. Donec id ultricies eros, sed pretium velit. Etiam augue mi, posuere et facilisis auctor, placerat eget turpis. Suspendisse augue nisl, ultricies sit amet nisl ut, tempus sodales lorem. Vivamus non tincidunt metus. Integer lectus sapien, laoreet ut placerat ut, aliquam et purus. Integer in semper mi. Nunc tempor eget urna a laoreet.

    Phasellus a dapibus enim. Nam malesuada ex a massa convallis mattis. Etiam volutpat lacus vitae odio molestie, eget interdum orci venenatis. Ut non placerat diam, nec blandit nibh. Vestibulum ut sapien sed orci ornare commodo. Nam id neque in dui tristique venenatis ac sed lorem. Nulla aliquam turpis id lorem molestie egestas. Etiam semper sodales libero, sed varius ante. Phasellus mollis euismod est vel gravida. Cras bibendum neque eget odio laoreet, ac feugiat quam egestas. Maecenas feugiat erat facilisis lacus ornare dictum. Aliquam quis porttitor enim. Nunc quis consequat elit. Donec pellentesque, purus eu varius condimentum, enim enim vestibulum erat, ut scelerisque dolor nulla et mi. Praesent tincidunt ante vitae neque fermentum pulvinar. Maecenas fermentum placerat consectetur.`
  },
  { 
    id: 3,
    title: 'Article three',
    date: 'December 21, 2018 19:31:00',
    abstract: 'Vestibulum ut sapien sed orci ornare commodo. Nam id neque in dui tristique venenatis ac sed lorem. Nulla aliquam turpis id lorem molestie egestas.',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu sollicitudin libero, vitae lacinia orci. Maecenas sed egestas ipsum. Duis euismod tincidunt pretium. Cras consequat risus id fermentum elementum. Nullam a lorem sed risus hendrerit rhoncus. Proin lacus lectus, ultrices gravida venenatis nec, eleifend quis erat. Donec et blandit nunc. Donec id ultricies eros, sed pretium velit. Etiam augue mi, posuere et facilisis auctor, placerat eget turpis. Suspendisse augue nisl, ultricies sit amet nisl ut, tempus sodales lorem. Vivamus non tincidunt metus. Integer lectus sapien, laoreet ut placerat ut, aliquam et purus. Integer in semper mi. Nunc tempor eget urna a laoreet.
    
    Phasellus a dapibus enim. Nam malesuada ex a massa convallis mattis. Etiam volutpat lacus vitae odio molestie, eget interdum orci venenatis. Ut non placerat diam, nec blandit nibh. Vestibulum ut sapien sed orci ornare commodo. Nam id neque in dui tristique venenatis ac sed lorem. Nulla aliquam turpis id lorem molestie egestas. Etiam semper sodales libero, sed varius ante. Phasellus mollis euismod est vel gravida. Cras bibendum neque eget odio laoreet, ac feugiat quam egestas. Maecenas feugiat erat facilisis lacus ornare dictum. Aliquam quis porttitor enim. Nunc quis consequat elit. Donec pellentesque, purus eu varius condimentum, enim enim vestibulum erat, ut scelerisque dolor nulla et mi. Praesent tincidunt ante vitae neque fermentum pulvinar. Maecenas fermentum placerat consectetur.`
  },
]

export default function getArticles(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
