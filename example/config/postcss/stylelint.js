import resolve from '../resolve';
import paths from '../paths';

export default {
  configFile: paths.stylelintConfig,
  files: [
    resolve.src('**/*.css'),
    resolve.lib('**/*.css')
  ],
  ignoreFiles: [resolve.modules('**/*.css')]
};
