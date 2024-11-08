{
  // a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
  type Circle = {
    shape: 'circle';
    radius: number;
  };

  type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (shape: Shape): number => {
    if (shape.shape === 'circle') {
      return Math.PI * Math.pow(shape.radius, 2);
    } else {
      return shape.width * shape.height;
    }
  };

  const circle: Circle = { shape: 'circle', radius: 5 };
  const rectangle: Rectangle = { shape: 'rectangle', width: 4, height: 6 };
  const circleArea = calculateShapeArea(circle);
  const rectangleArea = calculateShapeArea(rectangle);

  console.log(circleArea);
  console.log(rectangleArea);
  //
}
