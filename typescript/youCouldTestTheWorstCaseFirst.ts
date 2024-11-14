const youCouldTestTheWorstCaseFirst = () => {
    const validationThatGaveAFalseValue = false;

    if (validationThatGaveAFalseValue) {
        console.log("it is true and here I will have the rest of my code");
        console.log("imagine a lot of lines here");
    }
    else {
        return;
    }
}

const testingTheWorstCaseFirstExample1 = () => {
    const validationThatGaveAFalseValue = false;

    if (!validationThatGaveAFalseValue) return;

    console.log("the rest of my code");
}

const testingTheWorstCaseFirstExample2 = () => {
    const validationThatGaveAFalseValue = false;

    if (!validationThatGaveAFalseValue) {
        console.log("maybe you need to do something before return");
        return;
    }

    console.log("the rest of my code");
}