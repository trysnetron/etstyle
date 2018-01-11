from Pillow import Image
imagepath = raw_input("File path: ")
im = Image.open(imagepath)
pix = im.load()
print im.size