Requirements
-------------------
following structure:
```json
{
  "error": false,
  "id": "2ace3a5936f40b2718eed6d66b2253d6f080a27f",
  "filename": "KomodoOS-vince-2.0-20200115-0822-BETA-OFFICIAL.zip",
  "datetime": 1579076520,
  "version": "2",
  "size": 662175744,
  "url": "https://sourceforge.net/projects/komodos-romhttps://sourceforge.net/projects/komodos-rom/files/device/file",
  "filehash": "4782ba557da7f111b71a1a97cdd552d9",
  "website_url": "https://komodo-os.my.id",
  "news_url": "https://t.me/KomodOSRom",
  "donate_url": "https://Paypal.me/your paypal",
  "maintainer": "your name",
  "maintainer_url": "your link github or xda or whatever",
  "forum_url": "https://t.me/KomodOSGroup"
}
```

The `datetime` attribute is the build date expressed as UNIX timestamp.  
The `filename` attribute is the name of the file to be downloaded.  
The `id` attribute is a string that uniquely identifies the update.  
The `romtype` attribute is the string to be compared with the `ro.lineage.releasetype` property.  
The `size` attribute is the size of the update expressed in bytes.  
The `url` attribute is the URL of the file to be downloaded.  
The `version` attribute is the string to be compared with the `ro.lineage.build.version` property.  

Additional attributes are ignored.
