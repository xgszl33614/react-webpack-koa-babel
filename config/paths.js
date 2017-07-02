import path from 'path'

const root = path.join(__dirname, '..')
export default {
  root,
  entry: path.join(root, 'src', 'index.js'),
  src: path.join(root, 'src'),
  webpack: path.join(root, 'build'),
  static: path.join(root, 'static'),
  dist: path.join(root, 'dist'),
  // public: path.join(root, 'dist', 'public')
}
