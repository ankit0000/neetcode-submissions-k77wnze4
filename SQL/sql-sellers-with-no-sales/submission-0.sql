-- Write your query below
select seller_name 
from seller 
where seller_id
NOT IN (select distinct seller_id from orders where EXTRACT(YEAR FROM sale_date) = '2020')
order by seller_name ASC;