async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getAllWorks() {
  const data = await fetchAPI(`
    {
      works(sort: "id:DESC") {
        id
        name
        slug
        orientation
        image: featured_media {
          url
        }
      }
    }
  `)

  return data?.works
}

export async function getWorks(slug) {
  const data = await fetchAPI(
    `
  query WorkBySlug($where: JSON) {
    works(where: $where) {
      id
      name
      slug
      image: details_featured_image {
        url
      }
      short_description
      long_description
      carousel {
        id
        url
      }
      gallery {
        id
        url
      }
    }
  }
  `,
    {
      variables: {
        where: {
          slug,
        },
      },
    }
  )

  return data
}

export async function getWorkWithSlug() {
  const data = fetchAPI(`
    {
      works {
        slug
      }
    }
  `)
  return data?.work
}

export async function getAboutData() {
  const data = fetchAPI(`
    {
      teams {
        id
        name
        image: profile_picture {
          url
        }
        role
      }
      setting {
        who_we_are: about_who_we_are
        description: about_description
        image: about_featured_image {
          url
        }
        left_value: about_left_value
        right_value: about_right_value
        left_cta_value: about_image_value {
          url
        }
        right_cta_value: about_cta_value
      }
    }  
  `)

  return data
}