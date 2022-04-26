escribe('getTriangleType', () => {
    it('Should return the type of the triangle according to the values of each side', () => {
      const data = [
        {
          side1: 1,
          side2: 1,
          side3: 1,
          result: 'equilateral',
        },
        {
          side1: 1,
          side2: 1,
          side3: 2,
          result: 'isosceles',
        },
        {
          side1: 1,
          side2: 2,
          side3: 3,
          result: 'scalene',
        },
      ];
  
      data.forEach( triangle => {
        const result = triangle.side1 + triangle.side2 + triangle.side3;

        console.log(result);
  
        
      });
    });
  });