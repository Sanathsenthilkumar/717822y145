export const getDetails = async() => {
    const response_1 = await fetch('http://20.244.56.144/test/users', {
        method : "GET",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNjI4MDg4LCJpYXQiOjE3NDI2Mjc3ODgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjY4NWZhMzYwLTFjY2ItNDMyZC1iODNlLTUyYjBhOWQ4NTk2ZiIsInN1YiI6IjcxNzgyMnkxNDVAa2NlLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiS2FycGFnYW0gQ29sbGVnZSBvZiBFbmdpbmVlcmluZyIsImNsaWVudElEIjoiNjg1ZmEzNjAtMWNjYi00MzJkLWI4M2UtNTJiMGE5ZDg1OTZmIiwiY2xpZW50U2VjcmV0IjoiV1VFZVlFRlBjeXVqZkpmeSIsIm93bmVyTmFtZSI6IlNhbmF0aCIsIm93bmVyRW1haWwiOiI3MTc4MjJ5MTQ1QGtjZS5hYy5pbiIsInJvbGxObyI6IjcxNzgyMnkxNDUifQ.ziMTTM2WJYsGOqVgKofEYkd5ksplzLOHFGIO3S2208Y",
          }
        })
    return await response_1.json();
}