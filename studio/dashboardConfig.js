export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cd58cc6346fb2f56e6b209f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages23456h-studio',
                  apiId: '56c69ad7-096a-4975-bd4c-0e7797890b4b'
                },
                {
                  buildHookId: '5cd58cc6374bf514c3df2f80',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages23456h',
                  apiId: '474091de-5f73-4d3b-848e-0ef68aaf6011'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-nextjs-landing-pages23456h',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages23456h.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
