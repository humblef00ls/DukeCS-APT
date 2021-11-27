export const data = {
    name: "isSpecial",
    description: "Additional info and notes",
    tags:[ 'Lecture 12', 'Required'],
    problem: "Some people have dietary restrictions because of health issues, some because of religious issues, and some for ethical, moral, or other reasons. You must write the function lovely that determines how many of the individual ingredients in some food/recipe are edible. The String inedible is a white-space delimited list of inedible food-stuffs. Any ingredient that's not listed in inedible is, therefore, edible.",
    constraints: [
        "All characters in inedible and ingredients are upper or lower case 'A'-'Z', 'a'-z'",
        "The number of 'words' (character sequences separated by whitespace) in inedible is fewer than 50, similarly for ingredients",
        "Each word is separated from another word by exactly one space in both inedible and ingredients .",
        "All words in ingredients are distinct."
    ],
    examples: [
        'ingredients = "honey sugar"\ninedible = "rice milk potato"\n\nreturns: 2\n\nEach of the two items in ingredients is edible since neither is inedible.',
        'ingredients = "pork shrimp marshmallow"\ninedible = "asparagus shrimp lobster crayfish bacon"\n\nreturns: 2 \n\n shrimp isn\'t edible, but pork and marshmallow are',
        'ingredients = "a e i o u"\ninedible = "b c d f g h j k l m n p q r s t v w x y z"\n\nreturns: 5\n\n All the vowels are edible since only the consonants are inedible',
        'ingredients = "stuff"\ninedible = "this that the other stuff nonsense"\n\nreturns: 0'
    ],
    initial: ['def lovely(ingredients,inedible):', '"""', 'return int, number of items in', 'ingredients, a string that are edible', 'using informaion from  inedible, a string', '"""', '# you write code here']
}

export const result = {
    tests:[
        {
            id: 1,
            pass:true,
            expected:"2",
            got:"6",
            input:'"honey sugar" "rice milk potato"'
        },
        {
            id: 2,
            pass:false,
            expected:"1",
            got:"2",
            input:'"pork shrimp marshmallow" "asparagus shrimp lobster crayfish bacon"'
        },
        {
            id: 3,
            pass:true,
            expected:"5",
            got:"5",
            input:'"a e i o u" "b c d f g h j k l m n p q r s t v w x y z"'
        },
        {
            id: 4,
            pass:true,
            expected:"3",
            got:"3",
            input:'"chocolate vanilla strawberry" "napolean creamcheese ham steak eggs veal liver"'
        },
        {
            id: 5,
            pass:true,
            expected:"0",
            got:"0",
            input:'"this that" "the other that this"'
        },
        {
            id: 6,
            pass:false,
            expected:"4",
            got:"5",
            input:'"eggs grits butter coffee" "fried omelette poached tea salt"'
        },
        {
            id: 7,
            pass:false,
            expected:"3",
            got:"6",
            input:'"milk sugar chocolate" "milkchocolate"'
        }
    ],
    message: "Try using while loops",
}