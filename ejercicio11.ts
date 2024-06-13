function greeet(greeting: string, ...name: string[]) {
    return greeting + "" + name.join(",") + "!";
}

greeet("hola", "manolo", "samuel");

greeet("buenas noches");