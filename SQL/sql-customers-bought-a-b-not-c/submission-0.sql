SELECT c.customer_id, c.customer_name
FROM customers c
WHERE 
    -- Must have bought A
    EXISTS (
        SELECT 1 FROM orders o 
        WHERE o.customer_id = c.customer_id 
        AND o.product_name = 'A'
    )
    -- Must have bought B
    AND EXISTS (
        SELECT 1 FROM orders o 
        WHERE o.customer_id = c.customer_id 
        AND o.product_name = 'B'
    )
    -- Must NOT have bought C
    AND NOT EXISTS (
        SELECT 1 FROM orders o 
        WHERE o.customer_id = c.customer_id 
        AND o.product_name = 'C'
    )
ORDER BY c.customer_name;