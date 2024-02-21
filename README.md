### If Adding a new variable for the overarching Sign object
- Need to update in:
>> index.ts (SignProps and FormStep)
>> Sign preview component (for Sign object)
>> Sign Builder component (for sign object)
>> Form steps component (to handle where the user is in the build process, and if they can move previous or forwards)

- Control Flow is:
>> page.tsx
>> CreatePage/index.tsx
>> Object DTO for Sign JSON is mounted on SignBuilder.tsx
>> SignBuilder passes props to SignPreview.tsx and StepHandler.tsx, and receives props from all necessary components in building sign object
>> StepHandler also controls DTO object of Sign which all necessary props populate in StepHandler and SignPreview components, leading to object connection
>> Eventual goal is to have SignBuilder have all necessary 'Sign' prop variables to be able to successfully parse a JSON object to SVG which can be exported


### TO DO
Update ReadME
Change BC trails logo in SignPreview to have white font to reflect design document
Change Trail name to Trail Network

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
