const input = [
    {
        orderId: 554,
        creationDate: "2017-03-25T10:35:20", // Saturday
        orderLines: [
            {productId: 9872, name: 'Pencil', quantity: 3, unitPrice: 3.00}
        ]
    },
    {
        orderId: 555,
        creationDate: "2017-03-25T11:24:20", // Saturday
        orderLines: [
            {productId: 9872, name: 'Pencil', quantity: 2, unitPrice: 3.00},
            {productId: 1746, name: 'Eraser', quantity: 1, unitPrice: 1.00}
        ]
    },
    {
        orderId: 453,
        creationDate: "2017-03-27T14:53:12", // Monday
        orderLines: [
            {productId: 5723, name: 'Pen', quantity: 4, unitPrice: 4.22},
            {productId: 9872, name: 'Pencil', quantity: 3, unitPrice: 3.12},
            {productId: 3433, name: 'Erasers Set', quantity: 1, unitPrice: 6.15}
        ]
    },
    {
        orderId: 431,
        creationDate: "2017-03-20T12:15:02", // Monday
        orderLines: [
            {productId: 5723, name: 'Pen', quantity: 7, unitPrice: 4.22},
            {productId: 3433, name: 'Erasers Set', quantity: 2, unitPrice: 6.15}
        ]
    },
    {
        orderId: 690,
        creationDate: "2017-03-26T11:14:00", // Sunday
        orderLines: [
            {productId: 9872, name: 'Pencil', quantity: 4, unitPrice: 3.12},
            {productId: 4098, name: 'Marker', quantity: 5, unitPrice: 4.50}
        ]
    },
];

let obj = {}
let day = ""
let total = 0

let counter = {}

findAvgOrdered = (arr, id) => {
  arr.forEach(e => {
  const newDate = new Date(e.creationDate)
  let parsedDate = newDate.toDateString()
  parsedDate = parsedDate.substring(0, 3)
  day = parsedDate

  e.orderLines.forEach(el => {
      if(el.productId === id){
      total = total + el.quantity
       if(obj[day] >= 1){
      counter[day] += 1
      } else {
      counter[day] = 1
     }
    }
  })

  if(obj[parsedDate] >= 1){
    obj[parsedDate] += total
  } else {
    obj[parsedDate] = total
  }
    total = 0
  })

  for(let key in obj){
    if(counter[key] === undefined){
      counter[key] = 0
    } else {
      obj[key] = average(obj[key], counter[key])
    }
  }
  return obj
}

average = (a, b) => {
  return Math.round(a / b)
}

findAvgOrdered(input, 9872)
