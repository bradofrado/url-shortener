# URL Shortener

This web app allows users to enter in urls of varying length and generate a shortened version that redirects to the initial url entered. It is useful for urls that are long and space and/or simplicity is of a concern.

### Implementation Details

<!-- Provide a short description of your implementation (technologies used, brief overview of project architecture, etc.) -->

The app is implemented with the NextJS app router and typescript. The generation flow looks like the following:

- The user enters in a valid url (starts with http:// or https://) into a form input.
- That url is captured by the html form and send to the backend using server actions.
- The backend calls the `generateUniqueSlug` method of the `shortener` singleton.
- This method generates a six digit unique slug and maps it to the url entered, returning the slug.
- The backend then pairs this slug up with the deployed base url (`http://localhost:3000` for now).
- This now fully constructed, short url is sent to the client to be displayed and copied.

The app uses the following technologies:

- `NextJS` app router
- `typescript`
- `shadcn` for the base React components
- `vitest` for testing
- `prettier` for formatting

#### Frontend Architecture

The frontend base components are defined in the `components` folder using shadcn. Any page-specific component is kept at the same level as the page in a `components` folder (inside `app`). Server side actions are kept within a `actions.ts` file at the same level as the `page.tsx` that references it.

#### Backend Architecture

The backend architecture is setup with services that do not depend on any concrete implementations of the slug url generator. This will allow for easy future implementations like writing to a database without having to change much of the code.

This interface is the `Shortener` interface with the methods `generateUniqueSlug` and `getUrlFromSlug`.

The current implementation is the `MemoryShortener` class, which just generates and stores the slug/url in an in-memory map. This concrete implementation is initialized in `instances.ts` so that this file is the only file that has a dependency on this class.

### How to Run

<!--
- Include instructions on how to run your implementation locally. Be sure to include any necessary setup steps, such as installing dependencies, as well as the commands to start the application.
-->

To set things up locally, first run `npm install` then `npm run dev`.

Then navigate to [http://localhost:3000](http://localhost:3000).

To format, run `npm run format`.

To run the automated tests, run `npm run test`.

### Testing

<!-- Describe how you tested your solution (automated testing, manual testing process, screenshots, etc.) -->

I chose to implement tests for the unique slug generator as I wrote the function. This allowed me to easily test the functionality and setup clear expectations for the requirements of the function/how it should run.

Manual testing involved generating different slugs from random urls (small and big) and making sure they redirected correctly. I also tested to make sure that invalid urls were caught on both the client and the server.
