const getArea = (length, width) => {
    let area;
    // Área do retângulo: (base * altura)
    area = length * width;
    return area;
}

const getPerimeter = (length, width) => {
    let perimeter;
    // Perimetro do retângulo: 2 * (base + altura)
    perimeter = 2 * (length + width)
    return perimeter;
}

console.log(getArea(3, 4.5))
console.log(getPerimeter(3, 4.5))