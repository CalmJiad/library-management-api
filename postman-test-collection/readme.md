{
	"info": {
		"_postman_id": "0c742ef2-849d-4c9b-a996-1bb8d2b66aed",
		"name": "Library Management",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "26048842"
	},
	"item": [
		{
			"name": "Post New Books",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"title\": \"Becoming\",\n    \"author\": \"Michelle Obama\",\n    \"genre\": \"BIOGRAPHY\",\n    \"isbn\": \"9781524763138\",\n    \"description\": \"The former First Lady of the United States shares her deeply personal memoir, chronicling the experiences that shaped her.\",\n    \"copies\": 4,\n    \"available\": false\n  }",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/api/books",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"books"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get BOOKS with Filter",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:5000/api/books?filter=SCIENCE&sortBy=createdAt&sort=desc&limit=5",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"books"
					],
					"query": [
						{
							"key": "filter",
							"value": "SCIENCE"
						},
						{
							"key": "sortBy",
							"value": "createdAt"
						},
						{
							"key": "sort",
							"value": "desc"
						},
						{
							"key": "limit",
							"value": "5"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Single Book by ID",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:5000/api/books/68938432f027a79e6ed605e9",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"books",
						"68938432f027a79e6ed605e9"
					]
				}
			},
			"response": []
		},
		{
			"name": "Update Single Book by ID",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"title\": \"A Space Odessey\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/api/books/68938432f027a79e6ed605e9",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"books",
						"68938432f027a79e6ed605e9"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete Single Book",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "Borrow Book",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"book\": \"689608abd08eebab7e993ed7\",\n  \"quantity\": 1,\n  \"dueDate\": \"2025-07-18T00:00:00.000Z\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/api/borrow",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"borrow"
					]
				}
			},
			"response": []
		},
		{
			"name": "Borrowed Books Summary",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		}
	]
}