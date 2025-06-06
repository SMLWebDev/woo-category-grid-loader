document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.wcgl-categories');
    const loadMore = document.getElementById('wcgl-load-more');

    if (!container || !loadMore) return;

    let page = parseInt(container.dataset.page, 10);
    const perPage = parseInt(container.dataset.perPage, 10);
    const orderby = container.dataset.orderby || 'name';
    const order = container.dataset.order || 'ASC';
    const layout = container.dataset.layout || 'grid';

    const loadCategories = () => {
        const formData = new FormData();
        formData.append('action', 'load_product_categories');
        formData.append('nonce', WCGL_DATA.nonce);
        formData.append('page', page);
        formData.append('per_page', perPage);
        formData.append('orderby', orderby);
        formData.append('order', order);
        formData.append('layout', layout);


        loadMore.disabled = true;
        loadMore.textContent = 'Loading...';

        fetch(WCGL_DATA.ajax_url, {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                const { html, has_more } = data.data;

                const temp = document.createElement('div');
                temp.innerHTML = html;

                // Separate category grid and has_more
                const categories = temp.querySelectorAll('.wcgl-category');
                categories.forEach(cat => container.appendChild(cat));

                page++;
                container.dataset.page = page;

                if (!has_more) {
                    loadMore.style.display = 'none';
                } else {
                    loadMore.disabled = false;
                    loadMore.textContent = 'Load More';
                }
            } else {
                loadMore.style.display = 'none';
            }
        })
        .catch(() => {
            loadMore.style.display = 'none';
        });
    };

    loadCategories(); // Initial load
    loadMore.addEventListener('click', loadCategories);
});
