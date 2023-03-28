const listHelper = require('../utils/list_helper.js')

test('dummy returns one', () => {
  const result = listHelper.dummy([])
  expect(result).toBe(1)
})

const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }
]

const blogs = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
    __v: 0
  },
  {
    _id: '5a422b891b54a676234d17fa',
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10,
    __v: 0
  },
  {
    _id: '5a422ba71b54a676234d17fb',
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0,
    __v: 0
  },
  {
    _id: '5a422bc61b54a676234d17fc',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2,
    __v: 0
  }  
]

describe('total likes', () => {

  test('when list has no blogs equals 0', () => {
    const result = listHelper.totalLikes([])
    expect(result).toBe(0)
  })
  
  test('when list has only one blog equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('when list has many blogs equals the likes of them all', () => {
    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(36)
  })
})

describe('favorite blog', () => {
  test('when list has no blogs equals null', () => {
    const result = listHelper.favoriteBlog([])
    expect(result).toBe(null)
  })
      
  test('when list has only one blog equals the likes of that', () => {
    const result = listHelper.favoriteBlog(listWithOneBlog)
    expect(result).toEqual(listWithOneBlog[0])
  })
    
  test('when list has many blogs equals the likes of them all', () => {
    const result = listHelper.favoriteBlog(blogs)
    expect(result).toEqual(blogs[2])
  })
})

describe('Author wih the most blogs', () => {
  test('when list has no blogs equals null', () => {
    const result = listHelper.mostBlogs([])
    expect(result).toBe(null)
  })
          
  test('when list has one blog equals to that author', () => {
    const expected = {name: 'Edsger W. Dijkstra', count: 1}
    const result = listHelper.mostBlogs(listWithOneBlog)
    expect(result).toEqual(expected)
  })
        
  test('when list has many blogs equals to the most active author', () => {
    const expected = {name: 'Robert C. Martin', count: 3}
    const result = listHelper.mostBlogs(blogs)
    expect(result).toEqual(expected)
  })
})

describe('Author wih the most likes', () => {
  test('when list has no blogs equals null', () => {
    const result = listHelper.mostLikes([])
    expect(result).toBe(null)
  })
            
  test('when list has one blog equals to that author', () => {
    const expected = {author: 'Edsger W. Dijkstra', likes: 5}
    const result = listHelper.mostLikes(listWithOneBlog)
    expect(result).toEqual(expected)
  })
          
  test('when list has many blogs equals to the most popular authors likes', () => {
    const expected = {author: 'Edsger W. Dijkstra', likes: 17}
    const result = listHelper.mostLikes(blogs)
    expect(result).toEqual(expected)
  })
})