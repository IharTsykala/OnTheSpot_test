jQuery('header.product-title').text().trim()

jQuery('h1.product-name').text().trim()

jQuery('h1.product-single__title').text().trim()

jQuery('h1[itemprop="name"]').text().trim().replace(/\r|\n/g, 'slash').split('slash')[0]
jQuery('h1[itemprop="name"]').text().trim().replace(/\r|\n/g, 'slash').split('slash')[1]
.replace(/\r|\n/g, ' ')

jQuery('h1[data-talos="labelPdpProductTitle"]').text().trim()

jQuery('h1.section__title-text').text().trim()

jQuery('h1.h2').text().trim()