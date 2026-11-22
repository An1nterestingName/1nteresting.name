# Custom Content Meta

Displays content metadata below the article title: the page's date and the estimated reading time.

The date shown is the one selected by the `defaultDateType` option of [created-modified-date](https://github.com/quartz-community/created-modified-date) (`modified` by default), so no date is shown when that plugin is disabled. Pages without text content show no metadata.

## Usage

For advanced use cases, you can override in TypeScript:

```ts title="quartz.ts (override)"
import * as ExternalPlugin from "./.quartz/plugins";

ExternalPlugin.ContentMeta({
  showReadingTime: true,
  showComma: true,
});
```

## Configuration

| Option            | Type      | Default | Description                                        |
| ----------------- | --------- | ------- | -------------------------------------------------- |
| `showReadingTime` | `boolean` | `true`  | Whether to display the estimated reading time.     |
| `showComma`       | `boolean` | `true`  | Whether to display a comma between metadata items. |

## Documentation

See the [Quartz documentation](https://quartz.jzhao.xyz/plugins/ContentMeta) for more information.

## License

MIT
