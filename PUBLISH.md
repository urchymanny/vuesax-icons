# Publishing to npm

## Important: Package Name Conflict

The package name `vuesax-icons` already exists on npm. You have two options:

### Option 1: Use a Scoped Package Name (Recommended)
Use a scoped package name like `@your-username/vuesax-icons`:

1. Update `package.json`:
   ```json
   "name": "@your-username/vuesax-icons"
   ```

2. Publish:
   ```bash
   npm publish --access public
   ```

### Option 2: Use a Different Name
Choose a unique name like `vuesax-icons-react` or `@vuesax/icons-react`:

1. Update `package.json`:
   ```json
   "name": "vuesax-icons-react"
   ```

2. Publish:
   ```bash
   npm publish
   ```

## Publishing Steps

1. **Login to npm** (if not already logged in):
   ```bash
   npm login
   ```

2. **Verify you're logged in**:
   ```bash
   npm whoami
   ```

3. **Update package.json** (if needed):
   - Add your name to `author` field
   - Add repository URL if you have one
   - Update version if republishing

4. **Build the package**:
   ```bash
   npm run build
   ```

5. **Test the package locally** (optional):
   ```bash
   npm pack --dry-run
   ```

6. **Publish**:
   ```bash
   # For scoped packages:
   npm publish --access public
   
   # For regular packages:
   npm publish
   ```

## After Publishing

Users can install with:
```bash
npm install vuesax-icons
# or
npm install @your-username/vuesax-icons
```
