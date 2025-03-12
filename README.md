# ExemptionIQ Demo Application

This Next.js application demonstrates the implementation of ExemptionIQ, a tax exemption management solution, in both server and client-side contexts.

## Features

- Server-side implementation demo
- Client-side implementation demo
- Mock checkout process
- Real-time tax calculations
- Supabase integration for data persistence

## Prerequisites

- Node.js 18.x or later
- npm 9.x or later
- A Supabase account
- An AvaTax account

## Local Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```env
# AvaTax Configuration
AVATAX_API_USERNAME=your-avatax-username
AVATAX_API_PASSWORD=your-avatax-password
AVATAX_API_BASE=https://sandbox-rest.avatax.com/api/v2
AVATAX_COMPANY_ID=your-company-id
AVATAX_CLIENT_ID=your-client-id

# ExemptionIQ Configuration
STAR_FOX_SECRET_TOKEN=your-secret-token

# Supabase Configuration (already set up)
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Environment Variables

### AvaTax Configuration

- `AVATAX_API_USERNAME`: Your AvaTax API username
- `AVATAX_API_PASSWORD`: Your AvaTax API password
- `AVATAX_API_BASE`: AvaTax API base URL (sandbox or production)
- `AVATAX_COMPANY_ID`: Your AvaTax company ID
- `AVATAX_CLIENT_ID`: Your AvaTax client ID

### ExemptionIQ Configuration

- `STAR_FOX_SECRET_TOKEN`: Your ExemptionIQ authentication token

### Supabase Configuration

The Supabase configuration is already set up in the application. The connection details are included in the codebase.

## Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Builds the application for production
- `npm run start`: Runs the built application
- `npm run lint`: Runs the linter

## Project Structure

```
├── app/
│   ├── components/        # Shared components
│   ├── client-checkout/   # Client-side demo
│   ├── server-checkout/   # Server-side demo
│   └── page.tsx          # Landing page
├── lib/                  # Utility functions and configurations
└── public/              # Static assets
```

## Security Notes

- Never commit the `.env` file to version control
- Always use environment variables for sensitive information
- Keep your API keys and tokens secure

## Support

For issues related to:

- ExemptionIQ implementation: Contact Tax CSA support
- AvaTax integration: Refer to AvaTax documentation
- Technical issues: Create an issue in the repository
